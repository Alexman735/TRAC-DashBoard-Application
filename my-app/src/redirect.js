import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function ReDir(props)
{
  let history = useNavigate();
  useEffect(() =>
  {
      window.open(props.url);
      history("/TRAC");
  },[]);

  return null;
}

export default ReDir;