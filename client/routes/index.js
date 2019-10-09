import Top from 'components/pages/Top';
import Open from 'components/pages/Open';
import Working from 'components/pages/Working';
import Done from 'components/pages/Done';
import Pending from 'components/pages/Pending';

export default [
  {
    path: '/',
    component: Top
  },
  {
    path: '/top',
    component: Top
  },
  {
    path: '/open',
    component: Open
  },
  {
    path: '/working',
    component: Working
  },
  {
    path: '/Done',
    component: Done
  },
  {
    path: '/pending',
    component: Pending
  }
];
