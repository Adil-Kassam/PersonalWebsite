import Image from 'next/image'

type Book = {
  title: string
  author: string
  isbn: string
  rating?: number // 0–5
  note?: string
}

const currentlyReading: Book[] = [

  {
    title: 'Cigars of the Pharoah',
    author: 'Hergé',
    isbn: '9780316358361',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    isbn: '9781449373320',
  },

]

const read: Book[] = [
{
  title: 'The Death of Ivan Ilyich',
  author: 'Leo Tolstoy',
  isbn: '9780140449617',
  rating: 4,
},
{
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  isbn: '9780593135204',
  rating: 5,
},
{
  title: 'Red Rising',
  author: 'Pierce Brown',
  isbn: '9780345539809',
  rating: 3,
},


]

const wantToRead: Book[] = [
  {
    title: 'DBInt',
    author: 'OReilly',
    isbn: '9781492040347',
  },
  {
    title: 'threeeasypieces',
    author: 'Arpaci-Dusseau',
    isbn: '9781985086593',
  },
  {
    title: 'Odyssey',
    author: 'Homer',
    isbn: '9780143039952',
  },
  {
    title: 'Iliad',
    author: 'Homer',
    isbn: '9780140447941',
  },
  {
    title: 'Hannibal',
    author: 'Philip Freeman',
    isbn: '9781643138725',
  },

]

function StarRating({ rating = 0 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? 'text-amber-400' : 'text-neutral-600'}
        >
          ★
        </span>
      ))}
    </div>
  )
}

function BookCover({ book }: { book: Book }) {
  return (
    <div className="group relative w-32 sm:w-36 md:w-40">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-lg">
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
          alt={`${book.title} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/60">
          <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <StarRating rating={book.rating} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Shelf({ title, books }: { title: string; books: Book[] }) {
  return (
    <div className="mb-14">
      <h2 className="text-lg font-medium mb-4 text-neutral-100 text-center">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {books.map((book) => (
          <BookCover key={book.isbn} book={book} />
        ))}
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Books',
  description: 'Book collection.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-center">
        Books - Rating out of 5
      </h1>
      <p className= 'text-center'>
        
      </p>

      <Shelf title="Currently Reading" books={currentlyReading} />
      <Shelf title="Want to Read" books={wantToRead} />
      <Shelf title="Read" books={read} />

    </section>
  )
}