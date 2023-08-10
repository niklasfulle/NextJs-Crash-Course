import { store } from "@/store";

import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <div>
      <PokemonTable pokemon={store.getState().search.startupPokemon} />
    </div>
  );
}

export default SSRPokemonTable;
