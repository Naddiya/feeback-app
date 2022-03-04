import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Posts = () => {
    const status = 200;
    const navigate = useNavigate();

    const onClick = () => {
        console.log('hello');
        navigate('/about');
    };

    if (status === 404) {
        return <Navigate to='/notFound' />;
    }

    return (
        <>
            <h1>Post</h1>
            <button onClick={onClick}>Click</button>
            <Routes>
                <Route path='/show' element={<h1>Hello World</h1>} />
            </Routes>

        </>

    );
};

export default Posts;