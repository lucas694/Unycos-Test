import CourseCardOne from "../Assets/Cards/MoreInf/MoreCard1.png";
import CourseCardTwo from "../Assets/Cards/MoreInf/MoreCard2.png";
import CourseCardThree from "../Assets/Cards/MoreInf/MoreCard3.png";
// Testimonial
import TestimonialDataOne from "../Assets/Cards/Testimonial/Ellipse.png";
import TestimonialDataTwo from "../Assets/Cards/Testimonial/image.png";

const LessonPlanTopics = [
  {id:1, title:'Presentación', desc:'Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.'},
  {id:2, title:'NATACIÓN: ASPECTOS GENERALES', desc:'Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.'},
  {id:3, title:'BASES BIOMECÁNICAS DE LA NATACIÓN', desc:'Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.'},
  {id:4, title:'ESTILOS DE NATACIÓN', desc:'Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.'},
  {id:5, title:'VIRAJES Y SALTOS', desc:'El manejo de los saltos y virajes mejorará considerablemente tu rendimiento y tu técnica de natación. Los profesionales de fama internacional que asisten a Mireia te enseñan a perfeccionar esta técnica.'},
];
export function GetLessonPlanTopics(){
  return LessonPlanTopics;
}

const MoreCourseCards = [
  {id:1, name:"MARCUS COOPER", job:"PIRAGÜISMO", img:CourseCardOne},
  {id:2, name:"ISMAEL CALA", job:"DESARROLLO PERSONAL", img:CourseCardTwo},
  {id:3, name:"LEWIS AMARANTE", job:"MAQUILLAJE", img:CourseCardThree},
]
export function GetMoreCourseCards(){
  return MoreCourseCards;
}

const TestimonialData = [
  {id:1, username:"Samuel Vidal Hernández", photo:TestimonialDataTwo , job:"Mireia Belmonte Profesor" ,description:"Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.",},
  {id:2, username:"Ana Milena Gómez", photo:TestimonialDataOne , job:"Equipo Unycos" ,description:"Profundizar en el entrenamiento y proceso de enseñanza Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!",},
  {id:3, username:"Samuel Vidal Hernández", photo:TestimonialDataOne , job:"Equipo Unycos" ,description:"Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.",},
  {id:4, username:"Felipe Santo Suarez", photo:TestimonialDataOne , job:"Equipo Unycos" ,description:"Profundizar en el entrenamiento y proceso de enseñanza Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!",},
]
export function getTestimonialData(){
  return TestimonialData;
}