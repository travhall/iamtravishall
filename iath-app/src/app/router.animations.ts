import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const RouterTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: '0'
      }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)', opacity: '0' }),
          animate(
            '0.6s 0.2s ease-out',
            style({ transform: 'translateY(0%)', opacity: '1' })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)', opacity: '1' }),
          animate(
            '0.5s ease-in-out',
            style({ transform: 'translateY(0%)', opacity: '0' })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
