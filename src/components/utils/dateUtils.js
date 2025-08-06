export const days = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];

export function getWeekKey(y, m, d) {
  const dt = new Date(y, m - 1, d);
  const w = Math.ceil((dt.getDate() + (dt.getDay() ? dt.getDay() - 1 : 6)) / 7);
  return `${y}_${m}_${w}`;
}

export function monthNames() {
  return ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
          'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
}
