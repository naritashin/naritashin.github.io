import Detail from 'components/pages/Detail';
import Done from 'components/pages/Done';
import Open from 'components/pages/Open';
import Pending from 'components/pages/Pending';
import Top from 'components/pages/Top';
import Working from 'components/pages/Working';

export default [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/open',
    name: 'open',
    component: Open
  },
  {
    path: '/working',
    component: Working
  },
  {
    path: '/Done',
    name: 'done',
    component: Done
  },
  {
    path: '/pending',
    name: 'pending',
    component: Pending
  },
  {
    path: '/detail/:id',
    name: 'detail',
    props: { default: true },
    components: { default: Detail }
  }
];
