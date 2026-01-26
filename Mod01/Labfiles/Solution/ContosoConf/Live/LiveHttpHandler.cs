using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ContosoConf.Live
{
    public static class LiveWebSocketMiddleware
    {
        public static async Task HandleWebSocketRequest(HttpContext context)
        {
            if (context.WebSockets.IsWebSocketRequest)
            {
                var socket = await context.WebSockets.AcceptWebSocketAsync();
                var connection = new LiveClientConnection(socket);
                await connection.Start();
            }
            else
            {
                context.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }
    }
}