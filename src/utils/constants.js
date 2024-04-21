import mem1 from '../images/mem1.jpg';
import mem2 from '../images/mem2.jpg';
import mem3 from '../images/mem3.jpg';
import mem4 from '../images/mem4.jpg';
import mem5 from '../images/mem5.jpg';
import mem6 from '../images/mem6.jpg';
import mem7 from '../images/mem1.jpg';
import mem8 from '../images/mem8.jpg';
import mem9 from '../images/mem1.jpg';
import mem10 from '../images/mem1.jpg';
import mem11 from '../images/mem11.jpg';
import mem13 from '../images/mem13.jpg';
import mem14 from '../images/mem14.jpg';
import mem16 from '../images/mem16.jpg';
import softs from '../images/softs.jpg';
import zoom from '../images/zoom-mem.jpg';

export const attack1 = {
  name: 'Поставить подножку',
  lucky: 'С обиженным воплем противник падает. Время действовать!',
  unlucky: 'Вместо  того, чтобы упасть, враг пребольно пинает вас в колено и переходит в атаку. Похоже, у вас проблемы.',
  win: 'В падении враг напарывается на собственное оружие. Какая нелепая смерть.',
  loose: 'Враг игнорирует вашу попытку и бьет вас в ухо. Последнее, что вы видите - его злобный оскал.'
};
export const attack2 = {
  name: 'Пнуть в голень',
  lucky: 'Противник отскакивает на одной ноге, поливая вас бранью. Вперед!',
  unlucky: 'Вы больно ушибли ногу о его броню. Враг атакует, ухмыляясь.',
  win: 'Противник воет от боли и молит о пощаде. Неожиданно, но почему бы и нет.',
  loose: 'Противник легко уворачивается и бьет вас в челюсть. Перед глазами все меркнет.'
};
export const attack3 = {
  name: 'Изысканно оскорбить, надавив на детские травмы',
  lucky: 'Противник обескуражен и ретравматизирован. Пока он приходит в себя, надо развить успех!',
  unlucky: 'Перебор с изысканностью: похоже, он не понял половины слов, но теперь пытается проломить вам череп. Берегитесь!..',
  win: 'Противник упал на колени и рыдает, бросив оружие. Жалкое зрелище.',
  loose: 'Противник внимательно слушает, а потом в два предложения убеждает вас, что все сказанное - проекция вашей собственной уязвимости. Вы больше не можете сражаться - это бессмысленно, как и вся ваша никчемная жизнь. Перед глазами все меркнет.'
};
export const superAttack1 = {
  name: 'Призвать Испепеляющее Некромантическое Звездное Пламя Ада',
  lucky: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, вы видите, как он, пошатываясь, пытается подняться. Добьем его!',
  unlucky: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, вы видите, что он стоит невредимый, паскудно ухмыляясь: юркая зараза просто отступила в сторону и теперь контратакует. Защищайтесь!',
  win: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, от него остается только пепел на дне неглубокой воронки - ах да, и его душа теперь принадлежит вам навеки.',
  loose: 'Столб мертвенного сияния обрушивается с небес, но острая боль в черепе мешает вам дочитать заклинание: слишком долго, проклятый гаденыш добрался до вас раньше. Перед глазами все меркнет.'
};

export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const SET_LOCATION = 'SET_LOCATION';
export const ON_CLICK = 'ON_CLICK';
export const REMOVE_ON_CLICK = 'REMOVE_ON_CLICK';
export const REMOVE_LOCATIONS = 'REMOVE_LOCATIONS';

export const points = [ { text: "1. Немного конкретики. Женечка прошла курс по обучению на веб-разработчика от Яндекс.Практикума (январь 2023) и курс по react-разработке там же (май 2023). Пауза вызвана тем, что Женечку снова захантили в документоведы.",
pic: mem16}, 
{ text: "2. Сейчас Женечка ковыряет учебники Трепачева, читает про UX/UI и грызет чертовы алгоритмы в html-academy, а еще перечитывает всю теорию на свете, чтобы смотреться на собеседовании убедительно. Пока Женечка перечитала не все и стремается по этому поводу, есть шанс нанять ее за ветку.",
pic: mem5}, 
{ text: "3. Параллельно Женечка пишет несколько пет-проектов, на которых учится взаимодействию с командой: ПМ может не отличать фронта от дизайнера после двух месяцев работы, заказчик сайта-визитки может хотеть формат интернет-магазина без наполнения для интернет-магазина, редкий проект долетает до середины MVP. То есть Женечка - уже не просто вкатышек после курсов. Она вкатышек++",
pic: zoom}, 
{ text: "4. Женечка понимает, что ей еще пахать и пахать (адекватные ожидания!..). Пока готова (и может себе позволить) работать за еду и код-ревью (читай, бесценный опыт), но это временно, потому что цели - гиперэкспертность, понимание происходящего, высокая скорость работы, приятная зарплата.",
pic: mem13}, 
{ text: "5. Всю сознательную жизнь Женечка работала за себя и за того парня и не видит, почему айтишка станет исключением. Когда Женечка уходила в декрет, на ее функционал взяли четверых, здорово снизив требования к результату. На предпоследнем месте Женечке менее чем за год выдали функционал двух ведущих инженеров со стажем 5-10 лет. На последнем ей выдали полную ставку вместо половины.",
pic: mem2}, 
{ text: "6. У Женечки два бессмысленных высших образования (одно - с красным дипломом), и два специальных, то есть учится Женечка всю дорогу. Целеустремленностью Женечки можно резать некоторые сорта сыра...",
pic: mem6}, 
{ text: "7. ...и вот почему: Женечка переучивалась без пауз и академов с ребенком на голове и насыщенной работой фуллтайм (и никого не убила, не развелась, даже ребенок не начал заикаться). Женечка способна осваивать новый фреймворк под звуки мультиков, с осьминогом на голове, отвечая на бытовые вопросы раз в три минусы. Может показаться, что Женечка или преувеличивает, или сверхчеловек (на деле где-то 30/70).",
pic: mem2}, 
{ text: "8. Женечка идет по жизни, поигрывая софт-скиллами: школьные друзья Женечки недавно набили с ней общую тату, университетские зовут ее работать вместе, первый же парень Женечки женился на ней и никуда не девается уже 15+ лет. На последние две работы Женечку привели друзья и бывшие коллеги - и не пожалели об этом!",
pic: softs}, 
{ text: "9. Практически на любую прежнюю работу Женечка может вернуться, и парочку последних коварно держит во френдзоне. На всех работах она успешно проходила испытательных срок; на двух ее взяли в штат из 30+ кандидатов, которые тоже были после испытательного срока (потом Женечку стали отрывать с руками безо всяких сроков, заметим в скобках).",
pic: mem4}, 
{ text: "10. Помимо того, что Женечка - офигенный документовед и корректор официальных текстов, еще она кондитер четвертого разряда с развесистым портфолио. За отдельную доплату она НЕ БУДЕТ печь в офис.",
pic: mem3}, 
{ text: "11. Недостатки: начальники периодически не слышат ее стоп-слово. Но эту увлекательную историю она расскажет на собеседовании.",
pic: mem11}, 
]
