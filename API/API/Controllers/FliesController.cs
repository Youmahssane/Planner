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
    public class FliesController : ApiController
    {
        private APIContext db = new APIContext();

        // GET: api/Flies
        public IQueryable<Fly> GetFlies()
        {
            return db.Flies;
        }

        // GET: api/Flies/5
        [ResponseType(typeof(Fly))]
        public async Task<IHttpActionResult> GetFly(int id)
        {
            Fly fly = await db.Flies.FindAsync(id);
            if (fly == null)
            {
                return NotFound();
            }

            return Ok(fly);
        }

        // PUT: api/Flies/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFly(int id, Fly fly)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fly.Id)
            {
                return BadRequest();
            }

            db.Entry(fly).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FlyExists(id))
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

        // POST: api/Flies
        [ResponseType(typeof(Fly))]
        public async Task<IHttpActionResult> PostFly(Fly fly)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Flies.Add(fly);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = fly.Id }, fly);
        }

        // DELETE: api/Flies/5
        [ResponseType(typeof(Fly))]
        public async Task<IHttpActionResult> DeleteFly(int id)
        {
            Fly fly = await db.Flies.FindAsync(id);
            if (fly == null)
            {
                return NotFound();
            }

            db.Flies.Remove(fly);
            await db.SaveChangesAsync();

            return Ok(fly);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FlyExists(int id)
        {
            return db.Flies.Count(e => e.Id == id) > 0;
        }
    }
}