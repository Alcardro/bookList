"use client";

import { useEffect, useState } from "react";

interface Author {
  name: string;
}

interface Book {
  id: number;
  title: string;
  authors: Author[];
}

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="container">
        <h2>Lista de Libros</h2>
        <div className="loading">Cargando...</div>
      </div>
    );
  }

  if (loading) return <div className="loading">Cargando libros...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h2>Lista de Libros</h2>
      <table className="books-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="book-id">{book.id}</td>
              <td className="book-title">{book.title}</td>
              <td className="book-author">
                {book.authors.length > 0 ? book.authors[0].name : "Autor desconocido"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}