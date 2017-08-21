import { compose, head, toLower, split } from 'ramda';

import { ltrim, rtrim, concat } from 'utils/string';

export default compose(rtrim('/'), ltrim('/'), head, split('?'), toLower);
