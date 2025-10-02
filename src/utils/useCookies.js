import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function getCookie(key){
  // 获取名为'token'的Cookie值
  const getToken = cookies.get(key);

  return getToken
}

// 清除cookie
export function clearCookie(key) {
  cookies.remove(key);
}


// 添加默认导出
export default { getCookie, clearCookie };