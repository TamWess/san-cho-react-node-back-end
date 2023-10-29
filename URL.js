// API Robin fonctionnele

// export const URL = {
//   burger: "https://titi.startwin.fr/products/type/burger",
//   accompagnement: "https://titi.startwin.fr/products/type/accompagnement",
//   boisson: "https://titi.startwin.fr/products/type/boisson",
//   dessert: "https://titi.startwin.fr/products/type/dessert",
// };

const apiBaseUrl = process.env.REACT_APP_BASE_API_URL;

export const URL = {
  burger: `${apiBaseUrl}/api/burger/get`,
  accompagnement: `${apiBaseUrl}/api/accompagnement/get`,
  boisson: `${apiBaseUrl}/api/boisson/get`,
  dessert: `${apiBaseUrl}/api/dessert/get`,
};
