import { useParams } from 'react-router-dom';

const Posts = () => {
    const params = useParams();

    return (
        <>
            <h1>Posts {params.id}</h1>
            <p>{params.name}</p>
        </>
    );
};

export default Posts;