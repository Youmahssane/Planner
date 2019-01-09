using System;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using API.Models;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace API.Controllers
{
    public class AuthsController : ApiController
    {
        private APIContext db = new APIContext();

        // GET: api/Auths
        public IQueryable<Auth> GetAuths()
        {
            return db.Auths;
        }

        // GET: api/Auths/5
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> GetAuth(int id)
        {
            Auth auth = await db.Auths.FindAsync(id);
            if (auth == null)
            {
                return NotFound();
            }

            return Ok(auth);
        }

        // PUT: api/Auths/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAuth(int id, Auth auth)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != auth.id)
            {
                return BadRequest();
            }

            db.Entry(auth).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuthExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Auths
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> PostAuth(Auth auth)
        {
            Register regMail = await db.Registers.Where(i => i.email == auth.email).FirstOrDefaultAsync();

            Auth auths = await db.Auths.Where(j => j.email == auth.email).FirstOrDefaultAsync();
            if (!ModelState.IsValid)
            {
                return BadRequest("ERROR");
            }
            if (auths == null)
            {
                if (regMail == null)
                {
                    return BadRequest("Vous n'êtes pas inscrit");
                }
                else if ((regMail != null && regMail.password == auth.password))
                {

                    db.Auths.Add(auth);
                    await db.SaveChangesAsync();

                }
                else
                {
                    return BadRequest("Mot de passe ou non de compte incorrect");
                }
            }
            else
            {
                if (auths.password != auth.password)
                {

                    return BadRequest("Mot de passe ou non de compte incorrect");
                }
     

            }
            var claimsData = new[] { new Claim(ClaimTypes.Name, regMail.fullName+"-"+auths.role) };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ezfdsfaezfqdsrezfsdzefsdczfezefcqfzedsqfzefds"));
            var singInCred = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
            var tokenHandler = new JwtSecurityToken(    
                issuer: "http://localhost:4200/auth/login",
                audience: "api://default/",
                expires: DateTime.Now.AddMinutes(10),
                claims: claimsData,
                signingCredentials:singInCred);

            var token = new JwtSecurityTokenHandler().WriteToken(tokenHandler);
            string val  = "{ data: { token : '" + token + "'}  }";
                var json = JsonConvert.SerializeObject(val);
                return Ok(json);
            
        }

        // DELETE: api/Auths/5
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> DeleteAuth(int id)
        {
            Auth auth = await db.Auths.FindAsync(id);
            if (auth == null)
            {
                return NotFound();
            }

            db.Auths.Remove(auth);
            await db.SaveChangesAsync();

            return Ok(auth);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AuthExists(int id)
        {
            return db.Auths.Count(e => e.id == id) > 0;
        }
    }
}