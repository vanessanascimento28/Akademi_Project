import FilterIcon from "../../assets/images/icons/FilterIcon.svg";
import AddIcon from "../../assets/images/icons/AddIcon.svg";

export default function Students() {
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
      <div className="students__table-wrap">
        <table className="students__table" role="table"></table>
      </div>
    </section>
  );
}
