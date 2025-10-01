const Permission = ({ children, permissions: requiredPermissions }) => {
  const { permissions } = useSelector(state => state.user)
  
  const hasPermission = requiredPermissions.some(perm => 
    permissions.buttons.includes(perm)
  )
  
  return hasPermission ? children : null
}


function withPermission(WrappedComponent, requiredPermissions, options = {}) {
  return function (props) {
    const { permissions } = useSelector(state => state.user);
    const hasPermission = requiredPermissions.some(perm => 
      permissions.buttons.includes(perm)
    );

    if (hasPermission) {
      return <WrappedComponent {...props} />;
    }

    if (options.mode === 'disable') {
      return <WrappedComponent {...props} disabled />;
    }

    return null;
  };
}


// 使用方式
const AddUserButtonWithPermission = withPermission(
  Button, 
  ['system:user:add'], 
  { mode: 'disable' }
);

// 在组件中使用
<AddUserButtonWithPermission type="primary">新增用户</AddUserButtonWithPermission>