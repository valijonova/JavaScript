movies = [
  {
    time: "16:00",
    name: "Люди в чёрном: Интэрнэшнл" /*0*/,
    genre: "Фантастика, боевик, комедия",
  },

  {
    time: "14:00",
    name: "История игрушек 4" /*1*/,
    genre: "Мультфильм, фэнтэзи, комедия",
  },

  {
    time: "12:00",
    name: "Собачья жизнь 2",
    genre: "Фэнтэзи, драма, комедия",
  },

  {
    adult: true,
    time: "10:00",
    name: "Человек-паук 2",
    genre: "Фантастика, боевик, приключения",
  },
  {
    adult: false,
    time: "10:00",
    name: "Человек-паук",
    genre: "Фантастика, боевик, приключения",
  },
];

table_body = document.getElementById("t_body");

const film_helper = {
  getTitle() {
    return this.name;
  },

  getTime() {
    return this.time;
  },

  getGeneres() {
    return this.genre;
  },
};

function generator_film_row(film) {
  return `<tr class = "first_row">
    <td class="check">
        <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z" fill="#A3CC40"/>
        </svg>
    
    </td>

    <td class="cell_session">
        ${film_helper.getTime.apply(film)}
    </td>
    <td class="cell_film_name">
        ${film_helper.getTitle.apply(film)}
    </td>
    <td class="cell_genre">
        ${film_helper.getGeneres.apply(film)}
    </td>

    </tr>`;
}

for (film of movies) {
  if (!film.adult) {
    table_body.innerHTML += generator_film_row(film);
  }
}
