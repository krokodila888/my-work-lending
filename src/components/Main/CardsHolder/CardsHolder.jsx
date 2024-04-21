import React, { useEffect, useState } from "react";
import './CardsHolder.css';
import pencil from '../../../images/pencil.png';
import gurb from '../../../images/gurb.png';
import { addCard, removeCard, editCard } from '../../../services/actions/cards.js';
import { useSelector, useDispatch } from 'react-redux';

function CardsHolder() {

  const { cards } = useSelector(state => state.cardsReducer);
  const dispatch = useDispatch();
  const [repeatMode, setRepeatMode] = useState(false);
  const [addNewCard, setAddNewCard] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [currentWord, setCurrentWord] = useState({});
  const [form, setValue] = useState({ text: '', translation: '' });
  const [repeatingForm, setMeaning] = useState({ word: '' });
  const [editingForm, setEditedMeaning] = useState({ text: '', translation: '', ID: 0 });
  const [repeatedWords, setRepeatedWords] = useState([]);
  const [wordsToRepeat, setWordsToRepeat] = useState([]);
  const repeatingInput = document.getElementById('cardsHolderRepeatingInput');

  useEffect(()=> {
    if (cards !== []) 
    setWordsToRepeat(cards)
  }, [])

  useEffect(()=> {
    if (cards !== []) 
    setWordsToRepeat(cards)
  }, [cards])

  function getText() {
    if (cards === []) return 'У вас еще нет сохраненных карточек';
    if (cards !== [] && cards.length === 1) return `У вас ${cards.length} сохраненная карточка`;
    if (cards !== [] && (cards.length === 2 || cards.length === 3 || cards.length === 4)) return `У вас ${cards.length} сохраненные карточки`;
    else return `У вас ${cards.length} сохраненных карточек`
  };

  function showAddForm() {
    setAddNewCard(true);
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  };

  function showAllCards() {
    setShowCards(true);
  };

  function openEditCard(item) {
    setEditItem(true);
    setEditedMeaning({ ...editingForm, text: item.text, translation: item.translation, ID: item.ID });
  };

  function closeEditCard() {
    setEditItem(false);
  };

  function hideAllCards() {
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  };

  function showTranslation() {
    setShowWord(true);
  };

  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onRepeatChange = e => {
    setMeaning({ ...repeatingForm, [e.target.name]: e.target.value });
  };

  const onEditChange = e => {
    setEditedMeaning({ ...editingForm, [e.target.name]: e.target.value });
  };

  function handleSubmit() {
    dispatch(addCard(form));
    setAddNewCard(false);
    setValue({ text: '', translation: '' })
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    dispatch(editCard(editingForm));
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  };

  function handleClose() {
    setAddNewCard(false);
    setValue({ text: '', translation: '' })
  };

  function startRepeating() {
    setRepeatMode(true);
    setCurrentWord(wordsToRepeat[0]);
    setShowCards(false);
    setEditItem(false);
    setEditedMeaning({ text: '', translation: '', ID: 0 });
  }

  function deleteCard(item) {
    dispatch(removeCard(item))
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
      <p className="cardsHolder__title">
        {currentWord.translation}
      </p>
      {showWord && 
      <>
        <p className="cardsHolder__title">
          {currentWord.text}
        </p>
        <p>Рекомендуем напечатать правильный вариант все равно: так он лучше запомнится</p>
      </>}
    </>)
  }

  useEffect(()=> {
    if (repeatingInput && (currentWord.text === repeatingForm.word)) 
    {setIsCorrect(true);
    repeatingInput.classList.add('cardsHolder__input_active');};
    if (repeatingInput && (currentWord.text !== repeatingForm.word) && isCorrect) {
      setIsCorrect(false);
      repeatingInput.classList.remove('cardsHolder__input_active');};
  }, [repeatingForm])

  function nextWord1() {
    setRepeatedWords([...repeatedWords, currentWord]);
    setShowWord(false);
    setIsCorrect(false);
    setMeaning({ ...repeatingForm, word: '' });
    repeatingInput.classList.remove('cardsHolder__input_active');
    if (wordsToRepeat.length > 1) {setCurrentWord(wordsToRepeat[1]); 
    setWordsToRepeat(wordsToRepeat.slice(1));}
    else {setCurrentWord({text: 'Правда все. Добавьте новые карточки (или подождите, пока мы добавим кнопку "Начать заново"', translation: 'Вы повторили все!'})}
  }

  return (
    <>
    <section className="cardsHolder__content" id="cardsHolder">
      <h2 className="cardsHolder__title">{getText()}</h2>
      {!addNewCard &&
      <div className='cardsHolder__button-block'>
        {!repeatMode && <button className='btn' onClick={showAddForm}>
          Добавить карточку
        </button>}
        {cards.length !== 0 && cards !== [] && !repeatMode && 
          <button className='btn' onClick={startRepeating}>
            Повторить слова
          </button>}
        {cards !== [] && cards.length !== 0 && !repeatMode && 
          <button className='btn' onClick={showAllCards}>
            Посмотреть на карточки
          </button>}
      </div>}
      {addNewCard && 
      <form className='cardsHolder__form' onSubmit={handleSubmit}>
        <input 
          placeholder="Слово на иностранном языке" 
          value={form.text} 
          name="text" 
          onChange={onChange}
          required
          type="text"
          className='cardsHolder__input'/>
        <input 
          placeholder="Перевод слова" 
          value={form.translation} 
          name="translation" 
          onChange={onChange}
          required
          type="text"
          className='cardsHolder__input' />
        <div className='cardsHolder__button-block'>
          <button 
            className='btn'
            type="submit"
            onClick={handleSubmit}>
              Сохранить
          </button>
          <button 
            className='cardsHolder__button'
            onClick={handleClose}>
              Закрыть
          </button>
        </div>
      </form>}
      {repeatMode && 
      <div className='cardsHolder__form'>
        <div>
          {word()}
        </div>
        <input 
          placeholder="Место для правильного значения" 
          value={repeatingForm.word} 
          id='cardsHolderRepeatingInput'
          type="text"
          name="word" 
          onChange={onRepeatChange}
          required
          className='cardsHolder__input'
          autoComplete="off" />
        <div className='cardsHolder__button-block'>
          <button 
            className='cardsHolder__button'
            onClick={showTranslation}>
              Показать слово
          </button>
          <button 
            className='cardsHolder__button'
            onClick={stopRepeating}>
              Закончить
          </button>
          <button 
            className='cardsHolder__button'
            onClick={nextWord1}>
              Следующая
          </button>
        </div>
      </div>}
      <div>
      {showCards && cards !== [] && cards.map((item, i) => (
        <div key={i} className="cardsHolder__card">
          <p>
            {item.text}
          </p>
          <p>
            {item.translation}
          </p>
          <img src={pencil} className="cardsHolder__pensil" alt='Иконка карандаша (тут можно редактировать текст)' onClick={() => {openEditCard(item)}}/>
          <img src={gurb} className="cardsHolder__pensil" alt='Иконка урны (тут можно удалить карточку)' onClick={() => {deleteCard(item)}}/>
        </div>))
      }
      </div>
      {showCards && cards !== [] && editItem && 
        <form className='cardsHolder__form' onSubmit={handleEditSubmit}>
          <input 
            placeholder='Слово на иностранном языке' 
            value={editingForm.text} 
            name="text" 
            onChange={onEditChange}
            required
            type="text"
            className='cardsHolder__input'/>
          <input 
            placeholder='Более точный перевод' 
            value={editingForm.translation} 
            name="translation" 
            onChange={onEditChange}
            required
            type="text"
            className='cardsHolder__input' />
          <div className='cardsHolder__button-block'>
            <button 
              className='btn'
              type="submit">
                Вот так лучше
            </button>
            <button 
              className='cardsHolder__button'
              onClick={closeEditCard}>
                Оставим как было
            </button>
          </div>
        </form>}
      {showCards && cards !== [] && 
        <button 
          className='cardsHolder__button cardsHolder__button1'
          onClick={hideAllCards}>
            Скрыть
        </button>
      }
    </section>
    </>
  );
}  

export default CardsHolder; 
