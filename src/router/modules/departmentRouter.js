import Layout from '@/layout'
export default {
  path: '/department',
  component: Layout,
  children: [
    {
      path: '',
      name: 'Department',
      component: () => import('@/views/department'),
      meta: { title: '组织', icon: 'tree' }
    }
  ]
}
