import { useContext } from "react";
import { themeContext } from "../App";
import "./css/Home.css";
let Home = () => {
  let { theme, setTheme } = useContext(themeContext);
  return (
    <div className={theme}>
      <h1 className={theme}>Home {theme}</h1>
      <p className={theme}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        expedita nulla mollitia facilis odit deleniti minus ad, vero incidunt
        molestiae numquam provident libero magnam quibusdam, soluta beatae iusto
        omnis ratione eaque nihil. Dolore eius dolor officiis qui, quia
        explicabo ipsa placeat suscipit molestiae veritatis incidunt eaque
        voluptatum tenetur odio consequatur cupiditate atque earum fugiat
        necessitatibus nostrum repudiandae vitae soluta reprehenderit adipisci?
        Et vitae deserunt debitis impedit voluptatibus dolor necessitatibus
        dolorum reprehenderit perspiciatis quas, soluta voluptas quidem error
        esse totam, rerum hic aliquam nemo nostrum. Sint, magnam culpa eveniet
        explicabo labore totam aperiam cumque, ad asperiores ipsa quod impedit
        nihil, in quidem ex doloremque reiciendis rerum iure nesciunt nisi.
        Reiciendis qui neque similique quidem expedita repellat cumque veritatis
        obcaecati quaerat rem ex laudantium optio, ab ducimus nobis. Eligendi
        voluptate veniam nesciunt consequuntur magnam repellat, rem accusantium
        adipisci quis possimus id rerum dolores quibusdam corrupti pariatur ex
        dolorem! Quis a quasi, ipsa neque voluptatem voluptatibus dignissimos
        dicta enim dolor nobis, tempore sit debitis assumenda explicabo numquam
        cupiditate placeat repellat reprehenderit illo animi nam. Facere,
        consequuntur. Quod eum perferendis neque assumenda obcaecati. Rem et
        unde, dolore ipsam eum quasi dicta ea officia soluta numquam dolores
        iste accusamus, dolor pariatur iusto! Obcaecati possimus iure officiis
        dolorum, facere adipisci veritatis culpa nemo eveniet dolorem ducimus
        architecto aut ab facilis, nobis impedit numquam libero alias
        dignissimos corrupti. Minus fugit voluptate, obcaecati nobis dolorum
        maiores cupiditate iure quasi deleniti qui veniam quam deserunt hic
        fugiat ipsa, quae rerum distinctio nihil, consectetur sapiente magni
        praesentium. Labore doloribus adipisci tenetur atque fugiat ab impedit,
        id soluta sequi nesciunt excepturi non laboriosam aspernatur repellat
        voluptatum iure rerum similique expedita asperiores cumque sed qui
        reiciendis ad. Placeat quae aperiam tempore omnis autem rerum quos
        commodi optio quam dolore sequi fuga amet voluptas, nemo, ratione ab
        culpa corrupti quis magni tenetur cum necessitatibus ex. Molestiae aut
        at repellat. Iure rerum labore iste excepturi, ratione tenetur molestias
        omnis eveniet voluptate quibusdam architecto quidem magnam non a beatae
        sunt velit recusandae, accusamus saepe nesciunt. Quasi provident
        consequuntur nihil tenetur similique beatae error sit veniam fugiat
        possimus placeat itaque vitae, nesciunt, commodi quam ipsum odit
        necessitatibus voluptatibus nulla corrupti harum minima voluptates?
        Accusamus distinctio, commodi odio ex, est illum deleniti dicta
        temporibus ratione voluptas numquam fuga adipisci placeat officiis quas
        incidunt, aliquid perferendis! Dolore deserunt optio voluptates ea
        magnam unde minus asperiores repellat! Animi esse, accusantium placeat,
        totam quaerat mollitia voluptas earum possimus obcaecati, excepturi
        commodi a enim aliquid eius deserunt nostrum nihil necessitatibus alias
        accusamus repellat deleniti. Temporibus quisquam dicta nam numquam iste
        vero. Facere aperiam neque iusto facilis soluta dicta! Hic provident
        perspiciatis consectetur voluptate debitis, suscipit ullam asperiores
        facere deleniti nulla! Ipsam reprehenderit minima doloribus ipsum
        reiciendis in ducimus corporis officia repudiandae, minus voluptatum
        sunt blanditiis nulla? In molestias doloribus voluptatem magni veniam,
        delectus neque, magnam vero aliquid aperiam qui error. Id totam, beatae
        ipsam voluptates et necessitatibus expedita ipsum ad ipsa sapiente
        temporibus. Ipsa ducimus molestiae fuga eaque itaque nemo fugiat maxime,
        obcaecati qui nisi officiis, error reiciendis quia suscipit illo
        assumenda exercitationem! Impedit eius aspernatur omnis voluptatum, ab
        eaque, nisi hic unde distinctio eligendi, soluta sint voluptates
        architecto eveniet fuga at minus provident! Pariatur quasi deserunt sit
        ab deleniti cupiditate eum facilis aliquid ullam. Dolorem dolores,
        eveniet molestiae velit, earum tempore sequi veniam aspernatur maiores
        temporibus pariatur amet suscipit minus inventore voluptates. Veniam
        nobis placeat, soluta sit explicabo distinctio, quisquam non repellendus
        voluptates voluptatibus officia tenetur at minus libero. Quas, possimus
        exercitationem. Beatae totam quae rem ipsum illo repellat blanditiis
        quibusdam expedita quia ad? A quas voluptates nostrum culpa reiciendis
        fuga optio? Veritatis, iure facere ab necessitatibus suscipit quae
        tempore eos distinctio animi similique dolore eum blanditiis magni
        impedit debitis assumenda mollitia, ipsa error, maiores nam repellendus?
        Quae necessitatibus fugit temporibus illum, rem hic expedita vero cumque
        possimus quasi. Doloremque, minima! Vel, repudiandae. Labore, deleniti
        consectetur architecto ipsum possimus veritatis sit laboriosam
        reprehenderit! Quasi incidunt nesciunt a tempore placeat labore
        praesentium ratione quos? Vel praesentium tempore, voluptate doloremque
        quaerat atque laboriosam impedit et quibusdam nemo temporibus assumenda
        ad ut numquam dolorum suscipit porro quasi. Molestias perspiciatis,
        velit quae unde distinctio tempora asperiores id voluptas in delectus
        sed beatae voluptate! Dolores modi molestias cum qui quos neque, aut
        recusandae assumenda necessitatibus.
      </p>

      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Change Theme
      </button>
      {/* <h2 style={{color : "black",}}>{theme}</h2>   */}
    </div>
  );
};

export default Home;
