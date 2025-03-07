import React, { useEffect, useState } from 'react';
import Card from './Card';
import axiosInstance from '../../../services/axiosConfig';


const PaginatedList = () => {
    const [totalItems, setTotalItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            console.log('Fetching data...');

            try {
                const response = await axiosInstance.get('/Blog');
                console.log('Response received:', response.data);
                setTotalItems(tratarData(response.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.log('Finished fetching data');
            }
        };

        fetchData();
    }, []);

    function tratarData(data) {
        if (!Array.isArray(data)) {
            console.error('Data is not an array:', data);
            return [];
        }
        return data.map((item) => (
            <Card
                key={item.id}
                id={item.id}
                nome={item.nome}
                descricao={item.description}
                foto={item.image}
            />
        ));
    }

    // const [totalItems, setTotalItems] = useState([
    //     <Card key={1} nome={"Gabriel"} descricao={"Teste"} foto={ComputerImage} />,
    //     <Card key={2} foto={ComputerImage} />,
    //     <Card key={3} foto={ComputerImage} />,
    //     <Card key={4} foto={ComputerImage} />,
    //     <Card key={5} foto={ComputerImage} />,
    //     <Card key={6} foto={ComputerImage} />,
    //     <Card key={7} foto={Homem} />,
    //     <Card key={8} foto={Homem} />,
    //     <Card key={9} foto={Homem} />,
    //     <Card key={10} foto={Homem} />,
    //     <Card key={11} foto={ComputerImage} />,
    //     <Card key={12} foto={ComputerImage} />,
    //     <Card key={6} foto={ComputerImage} />,
    //     <Card key={7} foto={Homem} />,
    //     <Card key={8} foto={Homem} />,
    //     <Card key={9} foto={Homem} />,
    //     <Card key={10} foto={Homem} />,
    //     <Card key={11} foto={ComputerImage} />,
    //     <Card key={12} foto={ComputerImage} />,
    // ]);

    
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(totalItems.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={currentPage === i
                        ? 'active bg-gray-400 w-7 h-7 rounded-full'
                        : 'hover:bg-gray-300 w-7 h-7 rounded-full'
                    }
                >
                    <p className='text-center'>{i}</p>
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div>
            <ul className='grid lg:grid-cols-2 gap-x-10 text-white'>
                {currentItems.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className='space-x-3 flex justify-center items-center mt-10'>
                <button className='text-white bg-gray-700 rounded-xl p-2 w-20 h-10' onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                {renderPageNumbers()}
                <button className='text-white bg-gray-700 rounded-xl p-2 w-20 h-10' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedList;
