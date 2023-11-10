import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postApiV1PwServiceCatalogoCategoria: build.mutation<
      PostApiV1PwServiceCatalogoCategoriaApiResponse,
      PostApiV1PwServiceCatalogoCategoriaApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/categoria`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getApiV1PwServiceCatalogoCategoria: build.query<
      GetApiV1PwServiceCatalogoCategoriaApiResponse,
      GetApiV1PwServiceCatalogoCategoriaApiRequest
    >({
      query: () => ({ url: `/api/v1/pw-service-catalogo/categoria` }),
    }),
    putApiV1PwServiceCatalogoCategoriaById: build.mutation<
      PutApiV1PwServiceCatalogoCategoriaByIdApiResponse,
      PutApiV1PwServiceCatalogoCategoriaByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/categoria/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteApiV1PwServiceCatalogoCategoriaById: build.mutation<
      DeleteApiV1PwServiceCatalogoCategoriaByIdApiResponse,
      DeleteApiV1PwServiceCatalogoCategoriaByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/categoria/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getApiV1PwServiceCatalogoCategoriaById: build.query<
      GetApiV1PwServiceCatalogoCategoriaByIdApiResponse,
      GetApiV1PwServiceCatalogoCategoriaByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/categoria/${queryArg.id}`,
      }),
    }),
    postApiV1PwServiceCatalogoProdotto: build.mutation<
      PostApiV1PwServiceCatalogoProdottoApiResponse,
      PostApiV1PwServiceCatalogoProdottoApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/prodotto`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getApiV1PwServiceCatalogoProdotto: build.query<
      GetApiV1PwServiceCatalogoProdottoApiResponse,
      GetApiV1PwServiceCatalogoProdottoApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/prodotto`,
        params: { idCategoria: queryArg.idCategoria },
      }),
    }),
    getApiV1PwServiceCatalogoProdottoById: build.query<
      GetApiV1PwServiceCatalogoProdottoByIdApiResponse,
      GetApiV1PwServiceCatalogoProdottoByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/prodotto/${queryArg.id}`,
      }),
    }),
    putApiV1PwServiceCatalogoProdottoById: build.mutation<
      PutApiV1PwServiceCatalogoProdottoByIdApiResponse,
      PutApiV1PwServiceCatalogoProdottoByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/prodotto/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteApiV1PwServiceCatalogoProdottoById: build.mutation<
      DeleteApiV1PwServiceCatalogoProdottoByIdApiResponse,
      DeleteApiV1PwServiceCatalogoProdottoByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/api/v1/pw-service-catalogo/prodotto/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as bffServiceApiBase };
export type PostApiV1PwServiceCatalogoCategoriaApiResponse =
  /** status 200 OK */ void | /** status 201 Created */ boolean;
export type PostApiV1PwServiceCatalogoCategoriaApiRequest = {
  /** Nome della categoria */
  body: string;
};
export type GetApiV1PwServiceCatalogoCategoriaApiResponse =
  /** status 200 OK */ ProjectWorkServiceCatalogoBlModelsCategoriaDto[];
export type GetApiV1PwServiceCatalogoCategoriaApiRequest = void;
export type PutApiV1PwServiceCatalogoCategoriaByIdApiResponse =
  /** status 200 OK */ boolean;
export type PutApiV1PwServiceCatalogoCategoriaByIdApiRequest = {
  /** id della categoria da modificare */
  id: number;
  /** nome della categoria da modificare */
  body: string;
};
export type DeleteApiV1PwServiceCatalogoCategoriaByIdApiResponse =
  /** status 200 OK */ boolean;
export type DeleteApiV1PwServiceCatalogoCategoriaByIdApiRequest = {
  /** id della categoria da cancellare */
  id: number;
};
export type GetApiV1PwServiceCatalogoCategoriaByIdApiResponse =
  /** status 200 OK */ ProjectWorkServiceCatalogoBlModelsCategoriaDto;
export type GetApiV1PwServiceCatalogoCategoriaByIdApiRequest = {
  /** id della categoria da visualizzare */
  id: number;
};
export type PostApiV1PwServiceCatalogoProdottoApiResponse =
  /** status 201 Created */ boolean;
export type PostApiV1PwServiceCatalogoProdottoApiRequest = {
  /** Dati del prodotto */
  body: ProjectWorkServiceCatalogoBlModelsProdottoUpsertDto;
};
export type GetApiV1PwServiceCatalogoProdottoApiResponse =
  /** status 200 OK */ ProjectWorkServiceCatalogoBlModelsProdottoDto[];
export type GetApiV1PwServiceCatalogoProdottoApiRequest = {
  /** Filtro per categoria */
  idCategoria?: number;
};
export type GetApiV1PwServiceCatalogoProdottoByIdApiResponse =
  /** status 200 OK */ ProjectWorkServiceCatalogoBlModelsProdottoDto;
export type GetApiV1PwServiceCatalogoProdottoByIdApiRequest = {
  /** Id del prodotto */
  id: number;
};
export type PutApiV1PwServiceCatalogoProdottoByIdApiResponse =
  /** status 200 OK */ boolean;
export type PutApiV1PwServiceCatalogoProdottoByIdApiRequest = {
  /** Id del prodotto */
  id: number;
  /** Dati da aggiornare */
  body: ProjectWorkServiceCatalogoBlModelsProdottoUpsertDto;
};
export type DeleteApiV1PwServiceCatalogoProdottoByIdApiResponse =
  /** status 200 OK */ boolean;
export type DeleteApiV1PwServiceCatalogoProdottoByIdApiRequest = {
  /** Id del prodotto */
  id: number;
};
export type LinksOpenLendingServicesCommonExceptionModelsAdditionalErrorDto = {
  title?: string | null;
  detail?: string | null;
  code?: string | null;
};
export type LinksOpenLendingServicesCommonExceptionModelsErrorResponseDto = {
  type?: string | null;
  title?: string | null;
  detail?: string | null;
  code?: string | null;
  additionalErrors?:
    | LinksOpenLendingServicesCommonExceptionModelsAdditionalErrorDto[]
    | null;
  _links?: string[] | null;
};
export type ProjectWorkServiceCatalogoBlModelsCategoriaDto = {
  id?: number;
  nome?: string | null;
};
export type ProjectWorkServiceCatalogoBlModelsProdottoUpsertDto = {
  nome?: string | null;
  categoria?: number;
  prezzo?: number;
  peso?: number | null;
  disponibilita?: number;
  descrizione?: string | null;
  immagine?: string | null;
  materiale?: string | null;
};
export type ProjectWorkServiceCatalogoBlModelsProdottoDto = {
  id?: number;
  nome?: string | null;
  categoria?: ProjectWorkServiceCatalogoBlModelsCategoriaDto | null;
  prezzo?: number;
  peso?: number | null;
  disponibilita?: number;
  descrizione?: string | null;
  immagine?: string | null;
  materiale?: string | null;
};
export const {
  usePostApiV1PwServiceCatalogoCategoriaMutation,
  useGetApiV1PwServiceCatalogoCategoriaQuery,
  useLazyGetApiV1PwServiceCatalogoCategoriaQuery,
  usePutApiV1PwServiceCatalogoCategoriaByIdMutation,
  useDeleteApiV1PwServiceCatalogoCategoriaByIdMutation,
  useGetApiV1PwServiceCatalogoCategoriaByIdQuery,
  useLazyGetApiV1PwServiceCatalogoCategoriaByIdQuery,
  usePostApiV1PwServiceCatalogoProdottoMutation,
  useGetApiV1PwServiceCatalogoProdottoQuery,
  useLazyGetApiV1PwServiceCatalogoProdottoQuery,
  useGetApiV1PwServiceCatalogoProdottoByIdQuery,
  useLazyGetApiV1PwServiceCatalogoProdottoByIdQuery,
  usePutApiV1PwServiceCatalogoProdottoByIdMutation,
  useDeleteApiV1PwServiceCatalogoProdottoByIdMutation,
} = injectedRtkApi;
