import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiSquareEditOutline,
  mdiTable,
  mdiTelevisionGuide,
  mdiPalette,
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: '控制台'
  },
  {
    label: '数据库',
    icon: mdiTable,
    menu: [
      {
        label: '用户表',
        to: '/tables'
      },
      {
        label: '行程表'
      }
    ]
  },
  {
    to: '/forms',
    label: '日志',
    icon: mdiSquareEditOutline
  },
  {
    to: '/ui',
    label: '资源管理器',
    icon: mdiTelevisionGuide
  },
  {
    to: '/',
    label: '样式',
    icon: mdiPalette
  },
  {
    to: '/profile',
    label: '个人信息',
    icon: mdiAccountCircle
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank'
  }
]
