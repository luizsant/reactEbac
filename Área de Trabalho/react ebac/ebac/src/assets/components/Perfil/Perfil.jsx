import "./Perfil.css";

function Perfil() {
  const usuario = {
    nome: "Luiz Santiago",
    avatar: "https://github.com/luizsant.png",
  };

  return (
    <div>
      <img
        className="perfil-avatar"
        src={usuario.avatar}
        alt="Avatar do usuário"
      />
      <h3 className="perfil-titulo">{usuario.nome}</h3>
    </div>
  );
}

export { Perfil };
