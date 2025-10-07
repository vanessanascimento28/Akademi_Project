import FilterIcon from "../../assets/images/icons/FilterIcon.svg";
import AddIcon from "../../assets/images/icons/AddIcon.svg";
import Mail from "../../assets/images/icons/Mail.svg";
import Phone from "../../assets/images/icons/Phone.svg";

export default function Students() {
  const rows = [
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parent: "Mana William",
      city: "Blumenau",
      grade: "VII A",
    },
    {
      name: "Tony Soap",
      id: "#123456789",
      date: "April 21, 2021",
      parent: "James Soap",
      city: "Criciúma",
      grade: "VII B",
    },
    {
      name: "Karen Hope",
      id: "#123456789",
      date: "April 25, 2021",
      parent: "Justin Hope",
      city: "Laguna",
      grade: "VII C",
    },
    {
      name: "Jordan Nico",
      id: "#123456789",
      date: "May 10, 2021",
      parent: "Amanda Nico",
      city: "Florianópolis",
      grade: "VII A",
    },
    {
      name: "Nadila Adja",
      id: "#123456789",
      date: "May 12, 2021",
      parent: "Jack Adja",
      city: "Rio de Janeiro",
      grade: "VII C",
    },
    {
      name: "Johnny Ahmad",
      id: "#123456789",
      date: "May 27, 2021",
      parent: "Danny Ahmad",
      city: "São Paulo",
      grade: "VII B",
    },
  ];

  return (
    <section className="page">
      <header className="page__header">
        <h2 className="page__title">Students</h2>
      </header>
      <section className="page__actions">
        <button className="btn btn--primary">
          Newest
          <img
            src={FilterIcon}
            alt="botão de abrir menu de filtros"
            className="btn__icon btn__icon--right"
          />
        </button>
        <button className="btn btn--secondary">
          <img
            src={AddIcon}
            alt="botão para adicionar um novo estudante"
            className="btn__icon btn__icon--left"
          />
          New Student
        </button>
      </section>
      <div className="table__wrap">
        <table className="table" role="table">
          <thead className="table__header">
            <tr>
              <th className="table__header-name" scope="col">
                Name
              </th>
              <th className="table__header-id" scope="col">
                ID
              </th>
              <th className="table__header-date" scope="col">
                Date
              </th>
              <th className="table__header-parent" scope="col">
                Parent Name
              </th>
              <th className="table__header-city" scope="col">
                City
              </th>
              <th className="table__header-contact" scope="col">
                Contact
              </th>
              <th className="table__header-grade" scope="col">
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="table__info">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="table__info-name">
                  <span
                    className="table__info-avatar"
                    aria-hidden="true"
                  ></span>
                  <span className="table__info-names">{r.name}</span>
                </td>
                <td className="table__info-id">
                  <a className="table__id" href="#!">
                    {r.id}
                  </a>
                </td>
                <td className="table__info-date">{r.date}</td>
                <td className="table__info-parent">{r.parent}</td>
                <td className="table__info-city">{r.city}</td>
                <td className="table__info-contact">
                  <button className="table__btn" aria-label="Phone">
                    <img src={Phone} alt="" className="table__btn-phone" />
                  </button>
                  <button className="table__btn" aria-label="Email">
                    <img src={Mail} alt="" className="table__btn-mail" />
                  </button>
                </td>
                <td>
                  <span
                    className={`badge ${r.grade
                      .replace(/\s/g, "")
                      .toLowerCase()}`}
                  >
                    {r.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
