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

  if (loading) return <div>Cargando libros...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Lista de Libros</h2>
      <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#0c4475ff' }}>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Título</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Autor</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{book.id}</td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>{book.title}</td>
              <td style={{ padding: '8px', border: '1px solid #ccc' }}>
                {book.authors.length > 0 ? book.authors[0].name : "Autor desconocido"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}