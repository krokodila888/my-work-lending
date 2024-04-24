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
import mem12 from '../images/mem12.jpg';
import mem14 from '../images/mem14.jpg';
import mem16 from '../images/mem16.jpg';
import mem17 from '../images/mem17.png'
import mem21 from '../images/mem21.jpg'
import mem23 from '../images/mem23.jpg'
import mem18 from '../images/mem18.jpg'
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

export const points = [ 
  { 
    text1: "Женечка прошла курс по обучению на веб-разработчика от Яндекс.Практикума (январь 2023) и курс по react-разработке там же (май 2023).",
    text2: "Пауза связана с тем, что Женечку снова захантили в документоведы.",
    pic: mem16,
    title: '1. Обучение'
  }, 
  { 
    text1: `Сейчас Женечка ковыряет учебники Трепачева, читает про UX/UI, грызет чертовы алгоритмы в html-academy и перечитывает всю теорию на свете, чтобы дойти до работодателя в более приличном виде.`,
    /*text2: "Пока Женечка перечитала не все и стремается по этому поводу, есть шанс нанять ее за бесценный опыт.",*/
    pic: mem5,
    title: '2. Продолжение обучения'
  }, 
  { 
    text1: "Параллельно Женечка пишет несколько пет-проектов, на которых учится взаимодействию с командой (до 20 человек).",
    text2: "Женечка - уже не просто вкатышек после курсов, она вкатышек++",
    pic: zoom,
    title: '3. Опыт'}, 
  { 
    text1: "У Женечки два высших образования (специалитет по юриспруденции и магистратура по менеджменту в информационной безопасности), одно - с красным дипломом, и два специальных.",
    /*text2: "У Женечки два бессмысленных высших образования (специалитет по юриспруденции и магистратура по менеджменту информационной безопасности), одно - с красным дипломом, и два специальных. Целеустремленностью Женечки можно резать некоторые сорта сыра...",*/
    pic: mem17,
    title: '4. Сильные стороны: Обучаемость'
    }, 
  { 
    text1: "Женечка переучилась с ребенком на голове и насыщенной работой фуллтайм, и еще успевала волонтерить.",
    text2: "Может показаться, что она или преувеличивает, или сверхчеловек (на деле где-то 30/70).",
    pic: mem23,
    title: '5. Проактивность'
  }, 
  { 
    text1: "Когда Женечка уходила в декрет, на ее функционал взяли четверых, снизив требования к качеству.",
    text2: "На предпоследнем месте ей менее чем за год дали функционал 2-х ведущих инженеров со стажем 5-10 лет.",
    text3: "На последнем ей выдали полную ставку вместо половины.",
    pic: mem18,
    title: '6. Работоспособность'
  }, 
  { 
    text1: "На двух работах Женечку взяли в штат после испытательного срока из 30+ кандидатов.",
    text2: "На последние две работы Женечку переманили бывшие коллеги.",
    /*text2: "(потом Женечку стали отрывать с руками безо всяких сроков, заметим в скобках).",*/
    pic: softs,
    title: '7. Софт-скиллы'
  },  
  { 
    text1: "Даже в следствии (ОШИБКИ ЮНОСТИ!) ВИЧ-положительные обвиняемые, кусавшие Жениных коллег, не кусали Женю.",
    text2: "Как тебе такое, Илон Маск?..",
    pic: mem2,
    title: '8. Софт-скиллы + стрессоустойчивость'
  }, 

  { 
    text1: "Женечка понимает, что ей еще много пахать, и готова работать на бесценный опыт.",
    text2: "Временно, потому что цели - гиперэкспертность, понимание происходящего, высокая скорость и приятная зарплата.",
    pic: mem13,
    title: '9. Адекватные ожидания'
  },
  { 
    text1: "Помимо того, что Женечка - офигенный документовед и корректор официальных текстов, еще она кондитер четвертого разряда. За отдельную доплату она НЕ БУДЕТ печь в офис.",
    pic: mem21,
    title: '10. Бонус'
  }, 
  { 
    text1: "Недостатки: начальники периодически не слышат ее стоп-слово. Но эту увлекательную историю она расскажет на собеседовании.",
    pic: mem11,
    title: '11. Умение держать интригу'
  }, 
]
