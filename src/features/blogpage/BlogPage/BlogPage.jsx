import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function BlogPage() {
    const location = useLocation();
    const [commentlist, setCommentList] = useState([
        { name: 'João', comment: 'Muito boa sua postagem, faça mais!!' },
        { name: 'Gabriel', comment: 'Adorei seu site, poderia me ajudar por favor?' },
    ]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const { id } = location.state || {};
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const texttest = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel est in enim fringilla commodo. Curabitur at feugiat felis. Vivamus et libero varius, convallis enim id, commodo elit. Ut posuere enim non nisi semper, ac auctor turpis egestas. Nunc turpis erat, lobortis ac suscipit a, vestibulum quis eros. Donec laoreet pretium purus, eu aliquam lorem porta at. Nam tincidunt sed magna eget bibendum. Donec eu luctus ligula. Duis turpis metus, mattis sed tincidunt vel, commodo sit amet ante. In dignissim tellus sit amet urna ullamcorper pellentesque at eu libero. Nullam enim augue, pharetra ornare sodales in, vestibulum imperdiet purus. Proin suscipit libero at nibh varius rhoncus eu in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat non lacus consequat hendrerit. Nulla auctor hendrerit neque eu fringilla.

Proin at gravida mi. Aliquam erat volutpat. Etiam tincidunt risus id pulvinar efficitur. Etiam id malesuada metus. Maecenas commodo nec ipsum sagittis pharetra. Nulla mollis posuere erat sed cursus. Etiam eget sodales lorem. Maecenas laoreet lacus eget sapien tristique vestibulum.
Etiam sodales sodales nunc, vel molestie est sagittis quis. Quisque finibus, ante ac venenatis imperdiet, est risus imperdiet leo, quis sodales metus urna vel leo. Etiam vulputate, ipsum quis scelerisque ullamcorper, turpis justo bibendum lacus, id lobortis risus tellus ac libero. Nunc dictum euismod vulputate. Vestibulum et suscipit dui, et ultricies ante. Praesent rhoncus magna eget venenatis euismod. Nulla a nulla id urna consectetur sodales vitae eget mauris. 

Fusce condimentum, quam quis consectetur tempor, metus augue pharetra orci, sit amet sollicitudin augue sem quis libero. Mauris sed nunc sit amet eros rutrum interdum eget id metus. Proin efficitur lobortis nulla bibendum ornare. Phasellus scelerisque nisi at ullamcorper dapibus. Sed quis arcu rutrum urna ullamcorper mattis. Vestibulum vehicula magna eu dignissim vulputate. Donec massa metus, pretium vitae laoreet id, ultricies mattis augue.
Quisque luctus malesuada mi non venenatis. Integer eget massa vitae ex tincidunt tempus. Ut rhoncus mattis felis non condimentum. Donec feugiat suscipit urna. Nulla gravida placerat euismod. Mauris mattis dapibus nisi condimentum consectetur. Nulla blandit ligula at nisi dignissim pharetra gravida non metus. 

Donec aliquam dui eu risus porta, ut dictum neque lacinia. Etiam aliquet neque at auctor ultrices. Aenean vulputate ipsum quis magna pellentesque pharetra. Praesent eget iaculis libero.

Nam in finibus mi. Aenean lacus justo, porttitor non ullamcorper a, dapibus id felis. Praesent dolor lacus, rhoncus molestie commodo in, tempor sed dui. Etiam ornare interdum libero vel tincidunt. Praesent tincidunt libero ante, ut gravida sapien sollicitudin ut. Etiam posuere urna ac sapien pretium, et faucibus leo pretium. In hendrerit, mauris eu consequat commodo, risus dui cursus sem, id gravida augue orci at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec congue rutrum porttitor. Nullam massa urna, viverra nec erat vel, imperdiet vehicula augue. In est est, pharetra eget tortor rhoncus, lobortis sodales odio. Maecenas ut sapien at turpis suscipit facilisis dapibus ut lorem. Proin at purus vehicula, viverra odio nec, pulvinar ligula.`;

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5036/Blog/${id}`)
                .then(response => {
                    setBlog(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!blog) {
        return <div>No blog data found</div>;
    }

    const handleComment = () => {
        setCommentList([...commentlist, { name, comment }]);
    };

    return (
        <div className='flex flex-col justify-center items-center space-y-20 mb-20'>
            <div className='w-full h-48 bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(data:image/jpeg;base64,${blog.image})` }}>
            </div>

            <div className='w-2/3 space-y-10'>

                <div className='space-y-10'>
                    <h1 className='text-4xl font-semibold'>{blog.description}</h1>
                    <p>{texttest}</p>
                </div>

                <img className='w-full h-60' src={`data:image/jpeg;base64,${blog.image}`} />

                <div>
                    <p>{texttest}</p>
                </div>

                <div className='space-y-10'>
                    <h1 className='text-4xl font-semibold'>{blog.description}</h1>
                    <p>{texttest}</p>
                </div>

                <div className='w-full border border-black'></div>

                <div className='space-y-10'>
                    {commentlist.map((item, index) => (
                        <div key={index} className='border p-4 rounded-lg'>
                            <p className='font-bold'>{item.name}</p>
                            <p>{item.comment}</p>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col space-y-10'>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    className='p-2 border-2 border-gray-500 rounded-lg' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comentário" 
                    className='h-32 p-2 border-2 border-gray-500 rounded-lg'
                    ></textarea>
                    <button onClick={handleComment} type="button" className='w-60 bg-lime-400 hover:bg-lime-500 focus:ring-4 font-semibold rounded-lg text-sm p-2'>Enviar</button>
                </div>

            </div>



        </div>
    );
}
