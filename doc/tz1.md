## Разработка библиотеки компонентов

### Необходимо:

1. создать и настроить проект
1. настроить [storybook](https://storybook.js.org/docs/react/get-started/introduction)
1. настроить тесты с [loki](https://loki.js.org/)
1. создать глупые компоненты (модификация поведения и передача параметров должна делаться через props):

   - заголовок (с поддержкой уровней)
   - параграф текста (с разными стилями - обычный, цитата, полужирный)
   - пробельный блок (с горизонтальной линией)
   - схлопывающийся блок (может сворачиваться в заголовок или показывать контент)
   - картинка (с вариантами обтекания)
   - колонки (с переменным числом колонок)

---

1. создать умный компонент, который запрашивает у пользователя данные и выводит их на страницу - в цикле (пока ответ не
   будет пустой) спрашивает имя компонента (из списка выше), какие ему нужны свойства (в зависимости от компонента) (
   можно взять простейшую реализацию с `prompt`)
1. опубликовать storybook на github pages
1. подготовить работу с сдаче (покрытие кода от 60%,
   использовать [RTL](https://testing-library.com/docs/react-testing-library/))
1. сделать ревью 2 других работ
1. сбросить ссылку на PR, опубликованный проект и рассмотренные пуллреквесты в част с преподавателем
