import { FC, useEffect, useState, useRef } from "react";
import styles from './CardsHolder.module.css';
import pencil from "../../../images/pencil.png";
import gurb from "../../../images/gurb.png";
import { addCard, removeCard, editCard } from "../../../services/actions/cards";
import { useAppDispatch } from "../../../services/hooks";
import { useAppSelector } from "../../../services/hooks";
import { TCard } from "../../../utils/types";

const CardsHolder: FC = () => {
  const { cards } = useAppSelector((state) => state.cardsReducer);
  const dispatch = useAppDispatch();
  const [repeatMode, setRepeatMode] = useState(false);
  const [addNewCard, setAddNewCard] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [currentWord, setCurrentWord] = useState<TCard | null>(null);
  const [form, setValue] = useState({ text: "", translation: "" });
  const [repeatingForm, setMeaning] = useState({ word: "" });
  const [editingForm, setEditedMeaning] = useState({
    text: "",
    translation: "",
    ID: 0,
  });
  const [repeatedWords, setRepeatedWords] = useState<TCard[]>([]);
  const [wordsToRepeat, setWordsToRepeat] = useState<TCard[]>([]);
  //const repeatingInput = document.getElementById('cardsHolderRepeatingInput');
  const cardsHolderRepeatingInput = useRef<any>(null);

  useEffect(() => {
    if (cards.length !== 0) setWordsToRepeat(cards);
  }, []);

  useEffect(() => {
    if (cards.length !== 0) setWordsToRepeat(cards);
  }, [cards]);

  function getText() {
    if (cards.length === 0) return "У вас еще нет сохраненных карточек";
    if (cards.length !== 0 && cards.length === 1)
      return `У вас ${cards.length} сохраненная карточка`;
    if (
      cards.length !== 0 &&
      (cards.length === 2 || cards.length === 3 || cards.length === 4)
    )
      return `У вас ${cards.length} сохраненные карточки`;
    else return `У вас ${cards.length} сохраненных карточек`;
  }

  function showAddForm() {
    setAddNewCard(true);
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: "", translation: "", ID: 0 });
  }

  function showAllCards() {
    setShowCards(true);
  }

  function openEditCard(item: any) {
    setEditItem(true);
    setEditedMeaning({
      ...editingForm,
      text: item.text,
      translation: item.translation,
      ID: item.ID,
    });
  }

  function closeEditCard() {
    setEditItem(false);
  }

  function hideAllCards() {
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: "", translation: "", ID: 0 });
  }

  function showTranslation() {
    setShowWord(true);
  }

  const onChange = (e: any) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onRepeatChange = (e: any) => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  const onEditChange = (e: any) => {
    setEditedMeaning({ ...editingForm, [e.target.name]: e.target.value });
  };

  function handleSubmit() {
    dispatch(addCard(form));
    setAddNewCard(false);
    setValue({ text: "", translation: "" });
  }

  const handleEditSubmit = (e: any) => {
    e.preventDefault();
    dispatch(editCard(editingForm));
    setEditItem(false);
    setEditedMeaning({ text: "", translation: "", ID: 0 });
  };

  function handleClose() {
    setAddNewCard(false);
    setValue({ text: "", translation: "" });
  }

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: "", translation: "", ID: 0 });
  }

  function deleteCard(item: any) {
    dispatch(removeCard(item));
  }

  function stopRepeating() {
    setRepeatMode(false);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: "" });
  }

  function word() {
    return (
      <>
        {currentWord && (
          <p className={styles.cardsHolder__title}>{currentWord.translation}</p>
        )}
        {showWord && currentWord && (
          <>
            <p className={styles.cardsHolder__title}>{currentWord.text}</p>
            <p>
              Рекомендуем напечатать правильный вариант все равно: так он лучше
              запомнится
            </p>
          </>
        )}
      </>
    );
  }

  useEffect(() => {
    if (
      cardsHolderRepeatingInput &&
      currentWord &&
      currentWord.text === repeatingForm.word
    ) {
      setIsCorrect(true);
      cardsHolderRepeatingInput.current.classList.add(
        styles.cardsHolder__input_active
      );
    }
    if (
      cardsHolderRepeatingInput &&
      currentWord &&
      currentWord.text !== repeatingForm.word &&
      isCorrect
    ) {
      setIsCorrect(false);
      cardsHolderRepeatingInput.current.classList.remove(
        styles.cardsHolder__input_active
      );
    }
  }, [repeatingForm]);

  function nextWord1() {
    setRepeatedWords([...repeatedWords, currentWord as TCard]);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: "" });
    cardsHolderRepeatingInput.current.classList.remove(
      styles.cardsHolder__input_active
    );
    if (wordsToRepeat.length > 1) {
      setCurrentWord(wordsToRepeat[1]);
      setWordsToRepeat(wordsToRepeat.slice(1));
    } else {
      setCurrentWord({
        text: 'Правда все. Добавьте новые карточки (или подождите, пока мы добавим кнопку "Начать заново"',
        translation: "Вы повторили все!",
      });
    }
  }

  return (
    <section 
        className={styles.cardsHolder__content} 
        id="cardsHolder">
        <h2 className={styles.cardsHolder__title}>
          {getText()}
        </h2>
        {!addNewCard && (
          <div className={styles.cardsHolder__buttonBlock}>
            {!repeatMode && (
              <button 
                className={styles.btn} 
                onClick={showAddForm}>
                Добавить карточку
              </button>
            )}
            {cards.length !== 0 && !repeatMode && (
              <button 
                className={styles.btn} 
                onClick={startRepeating}>
                Повторить слова
              </button>
            )}
            {cards.length !== 0 && !repeatMode && (
              <button 
                className={styles.btn} 
                onClick={showAllCards}>
                Посмотреть на карточки
              </button>
            )}
          </div>
        )}
        {addNewCard && (
          <form 
            className={styles.cardsHolder__form} 
            onSubmit={handleSubmit}>
            <input
              placeholder="Слово на иностранном языке"
              value={form.text}
              name="text"
              onChange={onChange}
              required
              type="text"
              className={styles.cardsHolder__input}
            />
            <input
              placeholder="Перевод слова"
              value={form.translation}
              name="translation"
              onChange={onChange}
              required
              type="text"
              className={styles.cardsHolder__input}
            />
            <div className={styles.cardsHolder__buttonBlock}>
              <button 
                className={styles.btn} 
                type="submit" 
                onClick={handleSubmit}>
                Сохранить
              </button>
              <button 
                className={styles.cardsHolder__button} 
                onClick={handleClose}>
                Закрыть
              </button>
            </div>
          </form>
        )}
        {repeatMode && (
          <div className={styles.cardsHolder__form}>
            <div>{word()}</div>
            <input
              placeholder="Место для правильного значения"
              value={repeatingForm.word}
              id="cardsHolderRepeatingInput"
              ref={cardsHolderRepeatingInput}
              type="text"
              name="word"
              onChange={onRepeatChange}
              required
              className={styles.cardsHolder__input}
              autoComplete="off"
            />
            <div className={styles.cardsHolder__buttonBlock}>
              <button 
                className={styles.cardsHolder__button} 
                onClick={showTranslation}>
                Показать слово
              </button>
              <button 
                className={styles.cardsHolder__button} 
                onClick={stopRepeating}>
                Закончить
              </button>
              <button 
                className={styles.cardsHolder__button} 
                onClick={nextWord1}>
                Следующая
              </button>
            </div>
          </div>
        )}
        <div>
          {showCards &&
            cards.length !== 0 &&
            cards.map((item: any, i: number) => (
              <div 
                key={i} 
                className={styles.cardsHolder__card}>
                <p>{item.text}</p>
                <p>{item.translation}</p>
                <img
                  src={pencil}
                  className={styles.cardsHolder__pensil}
                  alt="Иконка карандаша (тут можно редактировать текст)"
                  onClick={() => {
                    openEditCard(item);
                  }}
                />
                <img
                  src={gurb}
                  className={styles.cardsHolder__pensil}
                  alt="Иконка урны (тут можно удалить карточку)"
                  onClick={() => {
                    deleteCard(item);
                  }}
                />
              </div>
            ))}
        </div>
        {showCards && cards.length !== 0 && editItem && (
          <form 
            className={styles.cardsHolder__form} 
            onSubmit={handleEditSubmit}>
            <input
              placeholder="Слово на иностранном языке"
              value={editingForm.text}
              name="text"
              onChange={onEditChange}
              required
              type="text"
              className={styles.cardsHolder__input}
            />
            <input
              placeholder="Более точный перевод"
              value={editingForm.translation}
              name="translation"
              onChange={onEditChange}
              required
              type="text"
              className={styles.cardsHolder__input}
            />
            <div className={styles.cardsHolder__buttonBlock}>
              <button 
                className={styles.btn} 
                type="submit">
                Вот так лучше
              </button>
              <button 
                className={styles.cardsHolder__button} 
                onClick={closeEditCard}>
                Оставим как было
              </button>
            </div>
          </form>
        )}
        {showCards && cards.length !== 0 && (
          <button
            className={`${styles.cardsHolder__button} ${styles.cardsHolder__button1}`}
            onClick={hideAllCards}
          >
            Скрыть
          </button>
        )}
      </section>
  );
};

export default CardsHolder;
