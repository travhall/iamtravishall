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
          style({
            transform: 'translateY(50%)',
            zIndex: '10'
          }),
          animate('0.5s 0.25s ease-out',
            style({
              transform: 'translateY(0%)',
              opacity: '1'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({
            transform: 'translateY(0%)',
            opacity: '1',
            zIndex: '-10',
            filter: 'blur(3px)'
          }),
          animate('0.5s cubic-bezier(.75,.1,.1,.75)',
            style({
              transform: 'translateY(-10%)',
              opacity: '0'
            })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
