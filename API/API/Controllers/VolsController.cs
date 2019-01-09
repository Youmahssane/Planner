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
    public class VolsController : ApiController
    {
        private APIContext db = new APIContext();

        // GET: api/Vols
        public IQueryable<Vol> GetVols()
        {
            return db.Vols;
        }

        // GET: api/Vols/5
        [ResponseType(typeof(Vols))]
        public async Task<IHttpActionResult> GetVol(int id)
        {
            Vol vol = await db.Vols.FindAsync(id);
            if (vol == null)
            {
                return NotFound();
            }

            return Ok(vol);
        }

        // PUT: api/Vols/5
        [ResponseType(typeof(Vols))]
        public async Task<IHttpActionResult> PutVol(int id, Vol vol)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vol.Id)
            {

                return BadRequest("valeur fausse");
            }

            db.Entry<Vol>(vol).State = EntityState.Modified;

            try
            {

                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VolExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(vol);
        }

        // POST: api/Vols
        [ResponseType(typeof(Vols))]
        public async Task<IHttpActionResult> PostVol(Vol vol)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Vols.Add(vol);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vol.Id }, vol);
        }

        // DELETE: api/Vols/5
        [ResponseType(typeof(Vols))]
        public async Task<IHttpActionResult> DeleteVol(int id)
        {
            Vol vol = await db.Vols.FindAsync(id);
            if (vol == null)
            {
                return NotFound();
            }
             
            db.Vols.Remove(vol);
            await db.SaveChangesAsync();

            return Ok(vol);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VolExists(int id)
        {
            return db.Vols.Count(e => e.Id == id) > 0;
        }
    }
}