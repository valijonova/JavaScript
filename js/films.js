let films = [
  {
    time: "10:00",
    name: "Человек-паук",
    genre: "Фантастика, боевик, приключения",
  },

  {
    time: "12:00",
    name: "Собачья жизнь 2",
    genre: "Фэнтэзи, драма, комедия,",
  },

  {
    time: "14:00",
    name: "История игрушек 4",
    genre: " Мультфильм, фэнтэзи, комедия",
  },

  {
    time: "16:00",
    name: "Люди в чёрном: Интэрнэшнл",
    genre: "Фантастика, боевик, комедия",
  },
];

let t_body = document.getElementById("t_body");

for (i = 0; i < films.length; i++) {
  let row = "first_row";
  if (i % 2 === 0) {
    row = "second_row";
  }
  t_body.innerHTML += ` 
       <tr class=${row}>
                        <td class="check">
                            <svg width="11" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                                    fill="white" />
                            </svg>
                        </td>
                        <td class="cell_session">
                            ${films[i].time}
                        </td>
                        <td class="cell_film_name">
                            ${films[i].name}
                        </td>
                        <td class="cell_genre">
                            ${films[i].genre}
                        </td>
                    </tr>`;
}
