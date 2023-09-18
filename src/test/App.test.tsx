import { render, screen } from "@testing-library/react";
import App from "../App";
import { vi } from "vitest";
import ApiProvider from "../context/apicontext";
import { mockApiReturn } from "./mocks/ApiMock";
import userEvent from "@testing-library/user-event";

describe("testando a aplicação", () => {
  test("testando se o header aparece corretamente", () => {
    render(
      <ApiProvider>
        <App />
      </ApiProvider>
    );
    expect(
      screen.getByRole("heading", { name: /trybe news/i })
    ).toBeInTheDocument();
  });
  test("testando se o articleMain aparece e funciona corretamente", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => mockApiReturn,
    });
    render(
      <ApiProvider>
        <App />
      </ApiProvider>
    );

    const imgArticleMain = await screen.findByRole("img", {
      name: /ibge image/i,
    });
    const noticeRecent = screen.getByRole("heading", {
      name: /notícia mais recente/i,
    });
    const titleArticleMain = screen.getByRole("heading", {
      name: /ibge: mais de 180 mil candidatos farão provas neste domingo, em todo o país/i,
    });
    const btnNotice = screen.getByRole("link", {
      name: /leia a notícia aqui/i,
    });
    const btnFavorite = screen.getByTestId("favorite");
    expect(imgArticleMain).toBeInTheDocument();
    expect(noticeRecent).toBeInTheDocument();
    expect(titleArticleMain).toBeInTheDocument();
    expect(btnNotice).toBeInTheDocument();
    expect(btnFavorite).toBeInTheDocument();
    await userEvent.click(btnFavorite);
    expect(btnFavorite).toHaveAttribute("src", "/src/images/Group 270.svg");
    await userEvent.click(btnFavorite);
    expect(btnFavorite).toHaveAttribute("src", "/src/images/Vector.svg");
    await userEvent.click(btnNotice);
    expect(btnNotice).toHaveAttribute(
      "href",
      "http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37917-ibge-mais-de-180-mil-candidatos-farao-provas-neste-domingo-em-todo-o-pais.html"
    );
  });
  test("testando se o navigation aparece e funciona corretamente", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => mockApiReturn,
    });
    render(
      <ApiProvider>
        <App />
      </ApiProvider>
    );
    const btnRecent = screen.getByRole("button", { name: /mais recentes/i });
    const release = screen.getByRole("button", { name: /release/i });
    const notice = screen.getByRole("button", { name: /notícia/i });
    const favorite = screen.getByRole("button", { name: /favoritas/i });
    const btnMenu = screen.getByTestId("menu");
    expect(btnRecent).toBeInTheDocument();
    expect(release).toBeInTheDocument();
    expect(notice).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
    await userEvent.click(btnMenu);
    expect(btnRecent).toBeInTheDocument();
  });
  test("testando se os Cards aparece e funciona corretamente", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => mockApiReturn,
    });
    render(
      <ApiProvider>
        <App />
      </ApiProvider>
    );
    const primariNotice = await screen.findByRole("img", {
      name: /imagem mostrando o conteuudo do seguinte titulo: taxa de sindicalização cai a 9,2% em 2022, menor nível da série/i,
    });
    expect(primariNotice).toBeInTheDocument();
    const title = screen.getByRole("heading", {
      name: /taxa de sindicalização cai a 9,2% em 2022, menor nível da série/i,
    });
    expect(title).toBeInTheDocument();
    const btnRecent = screen.getByRole("button", { name: /mais recentes/i });
    const release = screen.getByRole("button", { name: /release/i });
    const notice = screen.getByRole("button", { name: /notícia/i });
    const favorite = screen.getByRole("button", { name: /favoritas/i });
    await userEvent.click(release);
    const primaryNoticeTitle = screen.getByRole('heading', {  name: /vendas no varejo sobem 0,7% em julho/i});
    expect(primaryNoticeTitle).toBeInTheDocument();
    expect(primariNotice).not.toBeInTheDocument();
    const favoritesImage = screen.getAllByTestId('images');
    await userEvent.click(favoritesImage[0]);
    await userEvent.click(favoritesImage[1]);
    expect(favoritesImage[0]).toHaveAttribute('src', '/src/images/Group 270.svg');
    await userEvent.click(notice);
    const titleNotice = screen.getAllByRole('heading', {
        name: /ibge: mais de 180 mil candidatos farão provas neste domingo, em todo o país/i
      });
    expect(titleNotice[0]).toBeInTheDocument();
    expect(primaryNoticeTitle).not.toBeInTheDocument();
    await userEvent.click(favorite);
    expect(screen.getByRole('heading', {  name: /vendas no varejo sobem 0,7% em julho/i})).toBeInTheDocument()
    await userEvent.click(btnRecent)


  });
  test('testando quando o fetch falha', () => {
    global.fetch = vi.fn().mockRejectedValue({});
      render(
        <ApiProvider>
          <App />
        </ApiProvider>
      );
      expect(
        screen.getByRole("heading", { name: /trybe news/i })
      ).toBeInTheDocument();
      localStorage.clear();
  })
});
