using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using API.Models;

namespace API.Controllers
{
    public class InfoSupsController : ApiController
    {
        private APIContext db = new APIContext();

        // GET: api/InfoSups
        public IQueryable<InfoSup> GetInfoSups()
        {
            return db.InfoSups;
        }

        // GET: api/InfoSups/5
        [ResponseType(typeof(InfoSup))]
        public async Task<IHttpActionResult> GetInfoSup(int id)
        {
            InfoSup infoSup = await db.InfoSups.FindAsync(id);
            if (infoSup == null)
            {
                return NotFound();
            }

            return Ok(infoSup);
        }

        // PUT: api/InfoSups/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutInfoSup(int id, InfoSup infoSup)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != infoSup.idInfo)
            {
                return BadRequest();
            }

            db.Entry(infoSup).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InfoSupExists(id))
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

        // POST: api/InfoSups
        [ResponseType(typeof(InfoSup))]
        public async Task<IHttpActionResult> PostInfoSup(InfoSup infoSup)
        {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.InfoSups.Add(infoSup);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = infoSup. idInfo }, infoSup);
        }

        // DELETE: api/InfoSups/5
        [ResponseType(typeof(InfoSup))]
        public async Task<IHttpActionResult> DeleteInfoSup(int id)
        {
            InfoSup infoSup = await db.InfoSups.FindAsync(id);
            if (infoSup == null)
            {
                return NotFound();
            }

            db.InfoSups.Remove(infoSup);
            await db.SaveChangesAsync();

            return Ok(infoSup);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool InfoSupExists(int id)
        {
            return db.InfoSups.Count(e => e.idInfo == id) > 0;
        }
    }
}