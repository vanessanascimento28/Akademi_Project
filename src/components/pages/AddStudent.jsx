import { useState } from "react";

export default function AddStudents() {
  const [adress, setAdress] = useState("");

  const handleAdressChange = (e) => {
    if (e.target.value.length <= 2000) {
      setAdress(e.target.value);
    }
  };

  return (
    <section className="page">
      <h2 className="page__title">Add Students</h2>
      <section
        className="card form form--student"
        aria-labelledby="student-info-title"
      >
        <h3 id="student-info-title" className="form__title">
          Student Details
        </h3>

        <form className="form__grid" noValidate>
          <div className="form__row">
            <label htmlFor="firstName" className="form__label">
              First Name *
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form__input form__input--name"
                placeholder="Letícia"
                required
              />
            </label>

            <label htmlFor="lastName" className="form__label">
              Last Name *
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form__input form__input--lastname"
                placeholder="Silva"
                required
              />
            </label>
          </div>
          <div className="form__row">
            <label htmlFor="dateBirth" className="form__label">
              Date & Place of Birth *
              <div className="form__inline-2">
                <input
                  id="date"
                  name="date"
                  type="text"
                  className="form__input"
                  placeholder="24 June 1996"
                  required
                />
                <input
                  id="placeBirth"
                  name="placeBirth"
                  type="text"
                  className="form__input"
                  placeholder="Maceió"
                  required
                />
              </div>
            </label>

            <label htmlFor="parentName" className="form__label">
              Parent Name *
              <input
                id="parentName"
                name="parentName"
                type="text"
                className="form__input"
                placeholder="Renata"
                required
              />
            </label>
          </div>
          <div className="form__row">
            <label htmlFor="email" className="form__label">
              Email *
              <input
                id="email"
                name="email"
                type="email"
                className="form__input"
                placeholder="leticiasilva@gmail.com"
                required
              />
            </label>

            <label htmlFor="phone" className="form__label">
              Phone *
              <input
                id="phone"
                name="phone"
                type="number"
                className="form__input"
                placeholder="+1234567890"
                required
              />
            </label>
          </div>
          <div className="form__row">
            <label
              htmlFor="adress"
              className="form__label form__label_type-large"
            >
              Address *
              <textarea
                id="adress"
                name="adress"
                className="form__input form__input--adress"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                value={adress}
                onChange={handleAdressChange}
                maxLength={2000}
                required
              ></textarea>
              <p className="form__charcounter">{adress.length}/2000</p>
            </label>
          </div>
        </form>
      </section>
      <section
        className="card form form--parent"
        aria-labelledby="parent-info-title"
      >
        <h3 id="parent-info-title" className="form__title">
          Parent Details
        </h3>

        <form className="form__grid" noValidate>
          <div className="form__row">
            <label htmlFor="firstName" className="form__label">
              First Name *
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="form__input form__input--name"
                placeholder="Joana"
                required
              />
            </label>

            <label htmlFor="lastName" className="form__label">
              Last Name *
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="form__input form__input--lastname"
                placeholder="Teresa da Silva"
                required
              />
            </label>
          </div>

          <div className="form__row">
            <label htmlFor="email" className="form__label">
              Email *
              <input
                id="email"
                name="email"
                type="email"
                className="form__input"
                placeholder="joanateresasilva@gmail.com"
                required
              />
            </label>

            <label htmlFor="phone" className="form__label">
              Phone *
              <input
                id="phone"
                name="phone"
                type="number"
                className="form__input"
                placeholder="+1234567890"
                required
              />
            </label>
          </div>
          <div className="form__row">
            <label
              htmlFor="adress"
              className="form__label form__label_type-large"
            >
              Address *
              <textarea
                id="adress"
                name="adress"
                className="form__input form__input--adress"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                value={adress}
                onChange={handleAdressChange}
                maxLength={2000}
                required
              ></textarea>
              <p className="form__charcounter">{adress.length}/2000</p>
            </label>
            <label htmlFor="payment" className="form__label">
              Payment *
              <div className="form__radio-options">
                <label className="form__radio-item">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    className="form__radio"
                  />
                  Cash
                </label>
                <label className="form__radio-item">
                  <input
                    type="radio"
                    name="payment"
                    value="debit"
                    className="form__radio"
                  />
                  Debit
                </label>
              </div>
            </label>
          </div>
        </form>
      </section>
      <section className="page__actions">
        <button className="btn btn--primary">Save as Draft</button>
        <button className="btn btn--secondary">Submit</button>
      </section>
    </section>
  );
}
