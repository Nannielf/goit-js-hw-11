import { onClickBtnLoadMore, onFormSubmit } from './js/handlers';
import { refs } from './js/selectors';

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onClickBtnLoadMore);