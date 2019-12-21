define([
  'views/menus/profile',
  'views/menus/sidebar',
], function(profile, sidebar) {
  const body = {
    view: 'scrollview',
    scroll: 'native-y',
    body: { cols: [{ $subview: true }] },
  };

  const layout = {
    id: 'app',
    rows: [
      {
        multi: true,
        cols: [sidebar, body],
      },
    ],
  };

  return {
    $ui: layout,
    $menu: 'app:menu',
    $oninit: (view, scope) => {
      scope.ui(profile.$ui);
    },
  };
});
