namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class requredintnce : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Auths", "fullName", c => c.String(nullable: false));
            AlterColumn("dbo.Auths", "email", c => c.String(nullable: false));
            AlterColumn("dbo.Auths", "password", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Auths", "password", c => c.String());
            AlterColumn("dbo.Auths", "email", c => c.String());
            AlterColumn("dbo.Auths", "fullName", c => c.String());
        }
    }
}
