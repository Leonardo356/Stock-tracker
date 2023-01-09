export const CloseActionWindow = (
  e: React.MouseEvent<Element, MouseEvent>,
  pageContainerClass: string,
  containerWindowClass: string,
) => {
    if(e.currentTarget !== e.target) return;
    let pageContainer = document.querySelector(`.${pageContainerClass}`) as HTMLElement | null;
    let containerWindow = document.querySelector(`.${containerWindowClass}`) as HTMLElement | null;

    containerWindow!?.classList.add('scale-[0]');
    setTimeout(() => { pageContainer!?.classList.add('hidden');}, 210);
};

export const DisplayActionWindow = (
  pageContainerClass: string,
  containerWindowClass: string,
) => {
  let pageContainer = document.querySelector(`.${pageContainerClass}`) as HTMLElement | null;
  let containerWindow = document.querySelector(`.${containerWindowClass}`) as HTMLElement | null;

  pageContainer!?.classList.remove('hidden');
  setTimeout(() => { containerWindow!?.classList.remove('scale-[0]');}, 1);
};

export const GetFullDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let monthFull: string = '';
  let dayFull: string = '';
  let hourFull: string = '';
  let minFull: string = '';
  let secFull: string = '';

  month < 10 ? monthFull = `0${month}` : monthFull = `${month}`;
  day < 10 ? dayFull = `0${day}` : dayFull = `${day}`;
  hour < 10 ? hourFull = `0${hour}` : hourFull = `${hour}`;
  min < 10 ? minFull = `0${min}` : minFull = `${min}`;
  sec < 10 ? secFull = `0${sec}` : secFull = `${sec}`;

  let fullDate = `${year}${monthFull}${dayFull}${hourFull}${minFull}${secFull}`

  return fullDate;
};