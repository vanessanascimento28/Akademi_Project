import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterIcon from "../../assets/images/icons/FilterIcon.svg";
import FilterIconUp from "../../assets/images/icons/FilterIconUp.svg";
import AddIcon from "../../assets/images/icons/AddIcon.svg";
import Mail from "../../assets/images/icons/Mail.svg";
import Phone from "../../assets/images/icons/Phone.svg";
import ArrowLeft from "../../assets/images/icons/ArrowLeft.svg";
import ArrowRight from "../../assets/images/icons/ArrowRight.svg";

export default function Students() {
  const navigate = useNavigate();
  const handleAddStudent = () => navigate("/addstudents");

  // paginação
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  const goTo = (n) => setCurrentPage(n);
  const prev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const next = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  // controle de ordenação (true = mais novo primeiro)
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const toggleSort = () => setSortNewestFirst((v) => !v);

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

  const sortedRows = useMemo(() => {
    const toTime = (d) => new Date(d).getTime();
    return [...rows].sort((a, b) =>
      sortNewestFirst
        ? toTime(b.date) - toTime(a.date)
        : toTime(a.date) - toTime(b.date)
    );
  }, [rows, sortNewestFirst]);

  return (
    <section className="page">
      <header className="page__header">
        <h2 className="page__title">Students</h2>
      </header>

      <section className="page__actions">
        <button
          className="btn btn--primary"
          onClick={toggleSort}
          aria-pressed={sortNewestFirst}
          title={
            sortNewestFirst ? "Showing newest first" : "Showing oldest first"
          }
        >
          {sortNewestFirst ? "Newest" : "Oldest"}
          <img
            src={sortNewestFirst ? FilterIcon : FilterIconUp}
            alt="seta"
            className="btn__icon btn__icon--right"
          />
        </button>

        <button onClick={handleAddStudent} className="btn btn--secondary">
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
            {sortedRows.map((r, i) => (
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
                    <img
                      src={Phone}
                      alt="ícone de telefone"
                      className="table__btn-phone"
                    />
                  </button>
                  <button className="table__btn" aria-label="Email">
                    <img
                      src={Mail}
                      alt="ícone de email"
                      className="table__btn-mail"
                    />
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

        <nav className="pagination" aria-label="Pagination">
          <button
            className="pagination__arrow"
            onClick={prev}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <img src={ArrowLeft} alt="seta para esquerda" aria-hidden="true" />
          </button>

          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => goTo(n)}
              className={`pagination__page ${
                currentPage === n ? "is-current" : ""
              }`}
              aria-current={currentPage === n ? "page" : undefined}
              aria-label={`Go to page ${n}`}
            >
              {n}
            </button>
          ))}

          <button
            className="pagination__arrow"
            onClick={next}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <img
              src={ArrowRight}
              alt="seta para a direita"
              aria-hidden="true"
            />
          </button>
        </nav>
      </div>
    </section>
  );
}
