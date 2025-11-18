"use client";

import { useEffect,useState } from "react";


interface Author{
    name:string;
}

interface Book {
    id:number;
    title:string;
    authors:Author[];
}


export default function BooksList() {
    const [books,setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch("https://gutendex.com/books/?page=1");
        if (!response.ok) throw new Error("Error al cargar los libros");

        const data = await response.json();
        setBooks(data.results.slice(0, 10));
      } catch (err) {
        setError("Ocurrió un error al obtener los datos");
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>{error}</p>;


  return (
     <div>
      <h2>Lista de Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> —{" "}
            {book.authors.length > 0 ? book.authors[0].name : "Autor desconocido"}
          </li>
        ))}
      </ul>
    </div>
  );
}