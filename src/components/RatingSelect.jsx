import { useState } from 'react';

const RatingSelect = ({ select }) => {
    const [selected, setSelected] = useState(10);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        select(selected);
    };

    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <ul className="rating">
            {ratings.map((number, id) => (
                <li key={id}>
                    <input
                        type="radio"
                        id={`num${id}`}
                        name="rating"
                        value={number}
                        onChange={handleChange}
                        checked={selected === number}
                    />
                    <label htmlFor={`num${id}`}>{number}</label>
                </li>
            ))}
        </ul>
    );
};

export default RatingSelect;