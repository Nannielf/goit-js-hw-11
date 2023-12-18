import { onClickBtnLoadMore, onFormSubmit } from './js/handlers';
import { selectors } from './js/selectors';

selectors.form.addEventListener('submit', onFormSubmit);
selectors.loadMoreBtn.addEventListener('click', onClickBtnLoadMore);