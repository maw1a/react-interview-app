/**
 * API interface for server APIs.
 */
export interface API {
  "/api/toggle": {
    GET: {
      request: {};
      response: { 200: { success: boolean; state: boolean } }; // statusCode <=> ResponseBody mapping
    };
    POST: {
      request: { body: { state: boolean } };
      response: {
        200: { success: boolean; state: boolean };
        400: { success: boolean; error: string };
      };
    };
  };
}
