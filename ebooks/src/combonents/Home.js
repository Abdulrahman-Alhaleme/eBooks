import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "./ebooks.json";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [priceFilter, setPriceFilter] = useState(0);

    useEffect(() => {
        setBooks(data.eBooks);
    }, []);

    useEffect(() => {
        const filteredBooks = data.eBooks.filter(
            (book) =>
                book.language.toLowerCase().includes(searchTerm.toLowerCase()) &&
                book.price >= priceFilter
        );
        setBooks(filteredBooks);
    }, [searchTerm, priceFilter]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search by language"
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <select
                value={priceFilter}
                onChange={(event) => setPriceFilter(parseInt(event.target.value))}
            >
                <option value={0}>All prices</option>
                <option value={10}>Less than $10</option>
                <option value={20}>Less than $20</option>
                <option value={30}>Less than $30</option>
                <option value={40}>Less than $40</option>
            </select>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <Link to={`/book/${index}`}>{book.language}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
