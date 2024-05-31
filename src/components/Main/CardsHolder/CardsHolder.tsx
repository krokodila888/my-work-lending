import { FC, useEffect, useState, useRef } from 'react';
import styles from './CardsHolder.module.scss';
import pencil from '../../../images/pencil.png';
import gurb from '../../../images/gurb.png';
import { RootState } from '../../../services/store';
import { TCard } from '../../../utils/types';
import CheckButton from '../../ux/Buttons/CheckButton';
import { addCard, removeCard, editCard } from '../../../services/cardSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardsHolder: FC = () => {
  const cards = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();
  const [repeatMode, setRepeatMode] = useState(false);
  const [addNewCard, setAddNewCard] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [currentWord, setCurrentWord] = useState<TCard | null>(null);
  const [form, setValue] = useState({ text: '', translation: '' });
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [editingForm, setEditedMeaning] = useState({
    text: '',
    translation: '',
    ID: 0,
  });
  const [repeatedWords, setRepeatedWords] = useState<TCard[]>([]);
  const [wordsToRepeat, setWordsToRepeat] = useState<TCard[]>([]);
  const cardsHolderRepeatingInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (cards.length !== 0) setWordsToRepeat(cards);
  }, [cards]);

  function getText() {
    if (cards.length === 0) return 'У вас еще нет сохраненных карточек';
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
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  }

  function showAllCards() {
    setShowCards(true);
  }

  function openEditCard(item: TCard) {
    setEditItem(true);
    if (item.ID !== undefined) {
      setEditedMeaning({
        ...editingForm,
        text: item.text,
        translation: item.translation,
        ID: item.ID,
      });
    }
  }

  function closeEditCard() {
    setEditItem(false);
  }

  function hideAllCards() {
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  }

  function showTranslation() {
    setShowWord(true);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onRepeatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  const onEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMeaning({ ...editingForm, [e.target.name]: e.target.value });
  };

  function handleSubmit() {
    if (form.text !== '' && form.translation !== '') {
      dispatch(addCard(form));
      setAddNewCard(false);
      setValue({ text: '', translation: '' });
    }
  }

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingForm.text !== '' && editingForm.translation !== '') {
      dispatch(editCard(editingForm));
      setEditItem(false);
      setEditedMeaning({ text: '', translation: '', ID: 0 });
    }
  };

  function handleClose() {
    setAddNewCard(false);
    setValue({ text: '', translation: '' });
  }

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  }

  function deleteCard(item: TCard) {
    dispatch(removeCard(item));
  }

  function stopRepeating() {
    setRepeatMode(false);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
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
      cardsHolderRepeatingInput.current &&
      currentWord &&
      currentWord.text === repeatingForm.word
    ) {
      setIsCorrect(true);
      cardsHolderRepeatingInput.current.classList.add(
        styles.cardsHolder__input_active,
      );
    }
    if (
      cardsHolderRepeatingInput &&
      cardsHolderRepeatingInput.current &&
      currentWord &&
      currentWord.text !== repeatingForm.word &&
      isCorrect
    ) {
      setIsCorrect(false);
      cardsHolderRepeatingInput.current.classList.remove(
        styles.cardsHolder__input_active,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repeatingForm]);

  function nextWord1() {
    setRepeatedWords([...repeatedWords, currentWord as TCard]);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    if (cardsHolderRepeatingInput.current) {
      cardsHolderRepeatingInput.current.classList.remove(
        styles.cardsHolder__input_active,
      );
    }
    if (wordsToRepeat.length > 1) {
      setCurrentWord(wordsToRepeat[1]);
      setWordsToRepeat(wordsToRepeat.slice(1));
    } else {
      setCurrentWord({
        text: 'Правда все. Добавьте новые карточки (или подождите, пока мы добавим кнопку "Начать заново"',
        translation: 'Вы повторили все!',
      });
    }
  }

  return (
    <section className={styles.cardsHolder} id='cardsHolder'>
      <h2 className={styles.cardsHolder__title}>{getText()}</h2>
      {!addNewCard && (
        <div className={styles.cardsHolder__buttonBlock}>
          {!repeatMode && (
            <CheckButton
              handleClick={showAddForm}
              isForBattle={false}
              text='Добавить карточку'
            />
          )}
          {cards.length !== 0 && !repeatMode && (
            <CheckButton
              handleClick={startRepeating}
              isForBattle={false}
              text='Повторить слова'
            />
          )}
          {cards.length !== 0 && !repeatMode && (
            <CheckButton
              handleClick={showAllCards}
              isForBattle={false}
              text='Посмотреть на карточки'
            />
          )}
        </div>
      )}
      {addNewCard && (
        <form className={styles.cardsHolder__form} onSubmit={handleSubmit}>
          <input
            placeholder='Слово на иностранном языке'
            value={form.text}
            name='text'
            onChange={onChange}
            required
            type='text'
            className={styles.cardsHolder__input}
          />
          <input
            placeholder='Перевод слова'
            value={form.translation}
            name='translation'
            onChange={onChange}
            required
            type='text'
            className={styles.cardsHolder__input}
          />
          <div className={styles.cardsHolder__buttonBlock}>
            <CheckButton
              handleClick={handleSubmit}
              isForBattle={false}
              text='Сохранить'
            />
            <CheckButton
              handleClick={handleClose}
              isForBattle={false}
              text='Закрыть'
            />
          </div>
        </form>
      )}
      {repeatMode && (
        <div className={styles.cardsHolder__form}>
          <div>{word()}</div>
          <input
            placeholder='Место для правильного значения'
            value={repeatingForm.word}
            id='cardsHolderRepeatingInput'
            ref={cardsHolderRepeatingInput}
            type='text'
            name='word'
            onChange={onRepeatChange}
            required
            className={styles.cardsHolder__input}
            autoComplete='off'
          />
          <div className={styles.cardsHolder__buttonBlock}>
            <CheckButton
              handleClick={showTranslation}
              isForBattle={false}
              text='Показать слово'
            />
            <CheckButton
              handleClick={stopRepeating}
              isForBattle={false}
              text='Закончить'
            />
            <CheckButton
              handleClick={nextWord1}
              isForBattle={false}
              text='Следующая'
            />
          </div>
        </div>
      )}
      <div>
        {showCards &&
          cards.length !== 0 &&
          cards.map((item: TCard, i: number) => (
            <div key={i} className={styles.cardsHolder__card}>
              <p>{item.text}</p>
              <p>{item.translation}</p>
              <img
                src={pencil}
                className={styles.cardsHolder__pensil}
                alt='Иконка карандаша (тут можно редактировать текст)'
                onClick={() => {
                  openEditCard(item);
                }}
              />
              <img
                src={gurb}
                className={styles.cardsHolder__pensil}
                alt='Иконка урны (тут можно удалить карточку)'
                onClick={() => {
                  deleteCard(item);
                }}
              />
            </div>
          ))}
      </div>
      {showCards && cards.length !== 0 && editItem && (
        <form className={styles.cardsHolder__form} onSubmit={handleEditSubmit}>
          <input
            placeholder='Слово на иностранном языке'
            value={editingForm.text}
            name='text'
            onChange={onEditChange}
            required
            type='text'
            className={styles.cardsHolder__input}
          />
          <input
            placeholder='Более точный перевод'
            value={editingForm.translation}
            name='translation'
            onChange={onEditChange}
            required
            type='text'
            className={styles.cardsHolder__input}
          />
          <div className={styles.cardsHolder__buttonBlock}>
            <button className={styles.btn} type='submit'>
              Вот так лучше
            </button>
            <CheckButton
              handleClick={closeEditCard}
              isForBattle={false}
              text='Оставим как было'
            />
          </div>
        </form>
      )}
      {showCards && cards.length !== 0 && (
        <CheckButton
          handleClick={hideAllCards}
          isForBattle={false}
          text='Скрыть'
        />
      )}
    </section>
  );
};

export default CardsHolder;
