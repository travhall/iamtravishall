import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  stagger
} from '@angular/animations';

export const RouterTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: '0',
      }),
      { optional: true }
    ),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)', opacity: '0', zIndex: '10' }),
          animate('0.45s ease-out',
            style({ transform: 'translateY(0%)', opacity: '1' })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)', opacity: '1', zIndex: '-10', filter: 'blur(3px)' }),
          animate(
            '0.35s ease-in-out',
            style({ transform: 'translateY(-100%)', opacity: '0' })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
