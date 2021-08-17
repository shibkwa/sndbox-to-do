import REACT from "react";

import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button></button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>あああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>えええええええ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};
